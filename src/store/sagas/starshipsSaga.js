/* eslint-disable camelcase */
import { put, call, takeEvery } from 'redux-saga/effects';
import { LOAD_STARSHIPS, setStarships } from '../actions/starshipsActions';

const url = 'https://swapi.dev/api';
const minRandom = 10;
const maxRandom = 99;

async function fetchStarships() {
  const response = await fetch(`${url}/starships`, {
    mode: 'cors',
    credentials: 'same-origin',
  });
  const json = await response.json();
  return json;
}

function* workerLoadStarships() {
  let data;
  if (localStorage.getItem('list-starships-key')) {
    data = JSON.parse(localStorage.getItem('list-starships-key'));
  } else {
    const starshipsData = yield call(fetchStarships);
    data = starshipsData.results.map(({
      name, length, crew, passengers, starship_class,
      id = `${name.split(' ').shift()}-${Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom}`,
      beloved = false,
    }) => ({
      name, length, crew, passengers, starship_class, id, beloved,
    }));
    localStorage.setItem('list-starships-key', JSON.stringify(data));
  }
  yield put(setStarships(data));
}

export default function* watchLoadStarships() {
  yield takeEvery(LOAD_STARSHIPS, workerLoadStarships);
}
