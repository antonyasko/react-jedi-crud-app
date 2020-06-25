const handleAddItem = (path, data, listData,
  planets, people, ships, setPlanets, setPeople, setShips) => {
  if (path.toLowerCase() === 'planets') {
    data.splice(0, data.length, ...planets, listData);
    localStorage.setItem('list-planets-key', JSON.stringify(data));
    setPlanets(data);
  } else if (path.toLowerCase() === 'starships') {
    data.splice(0, data.length, ...ships, listData);
    localStorage.setItem('list-starships-key', JSON.stringify(data));
    setShips(data);
  } else if (path.toLowerCase() === 'people') {
    data.splice(0, data.length, ...people, listData);
    localStorage.setItem('list-people-key', JSON.stringify(data));
    setPeople(data);
  }
};

export default handleAddItem;
