import { put, call, takeEvery } from 'redux-saga/effects';
import { LOAD_PLANETS, setPlanets } from '../actions/planetsActions';

const url = 'https://swapi.dev/api';
const minRandom = 10;
const maxRandom = 99;

async function fetchPlanets() {
  const response = await fetch(`${url}/planets`, {
    mode: 'cors',
    credentials: 'same-origin',
  });
  const json = await response.json();
  return json;
}

function* workerLoadPlanets() {
  let data;
  if (localStorage.getItem('list-planets-key')) {
    data = JSON.parse(localStorage.getItem('list-planets-key'));
  } else {
    const planetsData = yield call(fetchPlanets);
    data = planetsData.results.map(({
      name, diameter, climate, terrain, population,
      id = `${name.split(' ').shift()}-${Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom}`,
    }) => ({
      name, diameter, climate, terrain, population, id,
    }));
    localStorage.setItem('list-planets-key', JSON.stringify(data));
  }
  yield put(setPlanets(data));
}

export default function* watchLoadPlanets() {
  yield takeEvery(LOAD_PLANETS, workerLoadPlanets);
}
