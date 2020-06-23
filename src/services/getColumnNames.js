const getColumnNames = (path, listPeople, listPlanets, listStarships) => {
  switch (path.toLowerCase()) {
    case 'people': {
      return ((!listPeople.length) ? [] : Object.keys(listPeople[0]));
    }
    case 'planets': {
      return ((!listPlanets.length) ? [] : Object.keys(listPlanets[0]));
    }
    case 'starships': {
      return ((!listStarships.length) ? [] : Object.keys(listStarships[0]));
    }
    default:
      return [];
  }
};

export default getColumnNames;
