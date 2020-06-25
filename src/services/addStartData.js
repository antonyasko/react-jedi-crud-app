const addStartData = (path, listPlanets, listStarships, listPeople) => {
  switch (path.toLowerCase()) {
    case 'planets': {
      return [...listPlanets];
    }
    case 'starships': {
      return [...listStarships];
    }
    case 'people': {
      return [...listPeople];
    }
    default:
      return [];
  }
};

export default addStartData;
