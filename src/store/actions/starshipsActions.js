export const SET_STARSHIPS = 'SET_STARSHIPS';
export const DELETE_STARSHIPS = 'DELETE_STARSHIPS';

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarships(id) {
  return { type: DELETE_STARSHIPS, id };
}
