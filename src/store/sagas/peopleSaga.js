/* eslint-disable camelcase */
import { put, call, takeEvery } from 'redux-saga/effects';
import { LOAD_PEOPLE, setPeople } from '../actions/peopleActions';

const url = 'https://swapi.dev/api';
const minRandom = 10;
const maxRandom = 99;

async function fetchPeople() {
  const response = await fetch(`${url}/people`, {
    mode: 'cors',
    credentials: 'same-origin',
  });
  const json = await response.json();
  return json;
}

function* workerLoadPeople() {
  let data;
  if (localStorage.getItem('list-people-key')) {
    data = JSON.parse(localStorage.getItem('list-people-key'));
  } else {
    const peopleData = yield call(fetchPeople);
    data = peopleData.results.map(({
      name, height, mass, gender, birth_year,
      id = `${name.split(' ').shift()}-${Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom}`,
    }) => ({
      name, height, mass, gender, birth_year, id,
    }));
    localStorage.setItem('list-people-key', JSON.stringify(data));
  }
  yield put(setPeople(data));
}

export default function* watchLoadPeople() {
  yield takeEvery(LOAD_PEOPLE, workerLoadPeople);
}
