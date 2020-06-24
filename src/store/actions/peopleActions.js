export const SET_PEOPLE = 'SET_PEOPLE';
export const DELETE_PEOPLE = 'DELETE_PEOPLE';
export const LOAD_PEOPLE = 'LOAD_PEOPLE';
export const CHANGE_BELOVED_PEOPLE = 'CHANGE_BELOVED_PEOPLE';

export function setPeople(people) {
  return { type: SET_PEOPLE, people };
}

export function deletePeople(id) {
  return { type: DELETE_PEOPLE, id };
}

export function loadPeople() {
  return { type: LOAD_PEOPLE };
}

export function changeBelovedPeople(id) {
  return { type: CHANGE_BELOVED_PEOPLE, id };
}
