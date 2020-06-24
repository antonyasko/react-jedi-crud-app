export const SET_STARSHIPS = 'SET_STARSHIPS';
export const DELETE_STARSHIPS = 'DELETE_STARSHIPS';
export const LOAD_STARSHIPS = 'LOAD_STARSHIPS';
export const CHANGE_BELOVED_STARSHIPS = 'CHANGE_BELOVED_STARSHIPS';

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarships(id) {
  return { type: DELETE_STARSHIPS, id };
}

export function loadStarships() {
  return { type: LOAD_STARSHIPS };
}

export function changeBelovedStarships(id) {
  return { type: CHANGE_BELOVED_STARSHIPS, id };
}
