const addStartData = (path, listPeople, listPlanets, listStarships) => {
  switch (path.toLowerCase()) {
    case 'people': {
      return [...listPeople];
    }
    case 'planets': {
      return [...listPlanets];
    }
    case 'starships': {
      return [...listStarships];
    }
    default:
      return [];
  }
};

export default addStartData;
