const handleAddItem = (path, listData, people, planets, ships,
  setPeople, setPlanets, setShips, dispatch) => {
  switch (path) {
    case 'people': {
      localStorage.setItem('list-people-key', JSON.stringify([...people, listData]));
      dispatch(setPeople([...people, listData]));
      break;
    }
    case 'planets': {
      localStorage.setItem('list-planets-key', JSON.stringify([...planets, listData]));
      dispatch(setPlanets([...planets, listData]));
      break;
    }
    case 'starships': {
      localStorage.setItem('list-starships-key', JSON.stringify([...ships, listData]));
      dispatch(setShips([...ships, listData]));
      break;
    }
    default:
      break;
  }
};

export default handleAddItem;
