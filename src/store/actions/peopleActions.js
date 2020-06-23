export const SET_PEOPLE = 'SET_PEOPLE';
export const DELETE_PEOPLE = 'DELETE_PEOPLE';

export function setPeople(people) {
  return { type: SET_PEOPLE, people };
}

export function deletePeople(id) {
  return { type: DELETE_PEOPLE, id };
}
