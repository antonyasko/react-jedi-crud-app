export const SET_PEOPLE = 'SET_PEOPLE';
export const SET_PLANETS = 'SET_PLANETS';
export const SET_STARSHIPS = 'SET_STARSHIPS';

export function setPeople(people) {
  return { type: SET_PEOPLE, people };
}

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}
