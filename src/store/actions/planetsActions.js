export const SET_PLANETS = 'SET_PLANETS';
export const DELETE_PLANETS = 'DELETE_PLANETS';
export const LOAD_PLANETS = 'LOAD_PLANETS';

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanets(id) {
  return { type: DELETE_PLANETS, id };
}

export function loadPlanets() {
  return { type: LOAD_PLANETS };
}
