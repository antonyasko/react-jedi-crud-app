/* eslint-disable camelcase */
const url = 'https://swapi.dev/api';
const minRandom = 10;
const maxRandom = 99;

const getData = async (path) => {
  const response = await fetch(`${url}/${path}`, {
    mode: 'cors',
    credentials: 'same-origin',
  });
  const data = await response.json();
  switch (path) {
    case 'planets':
      return data.results.map(({
        name, diameter, climate, terrain, population,
        id = `${name.split(' ').shift()}-${Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom}`,
      }) => ({
        name, diameter, climate, terrain, population, id,
      }));
    case 'starships':
      return data.results.map(({
        name, length, crew, passengers, starship_class,
        id = `${name.split(' ').shift()}-${Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom}`,
      }) => ({
        name, length, crew, passengers, starship_class, id,
      }));
    case 'people':
      return data.results.map(({
        name, height, mass, gender, birth_year,
        id = `${name.split(' ').shift()}-${Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom}`,
      }) => ({
        name, height, mass, gender, birth_year, id,
      }));
    default:
      return [];
  }
};

export default getData;
