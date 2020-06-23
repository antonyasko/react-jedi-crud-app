const handleAddItem = (path, data, listData,
  people, planets, ships, setPeople, setPlanets, setShips, dispatch) => {
  if (path.toLowerCase() === 'people') {
    data.splice(0, data.length, ...people, listData);
    localStorage.setItem('list-people-key', JSON.stringify(data));
    // setPeople(data);     //
    dispatch(setPeople(data)); //
  } else if (path.toLowerCase() === 'planets') {
    data.splice(0, data.length, ...planets, listData);
    localStorage.setItem('list-planets-key', JSON.stringify(data));
    // setPlanets(data);      //
    dispatch(setPlanets(data)); //
  } else if (path.toLowerCase() === 'starships') {
    data.splice(0, data.length, ...ships, listData);
    localStorage.setItem('list-starships-key', JSON.stringify(data));
    // setShips(data);      //
    dispatch(setShips(data)); //
  }
};

export default handleAddItem;
