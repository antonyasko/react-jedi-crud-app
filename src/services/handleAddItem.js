const handleAddItem = (path, data, listData, people, planets, ships,
  setPeople, setPlanets, setShips, dispatch) => {
  switch (path) {
    case 'people': {
      data.splice(0, data.length, ...people, listData);
      localStorage.setItem('list-people-key', JSON.stringify(data));
      dispatch(setPeople(data));
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
