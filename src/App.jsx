/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import Creater from './components/Creater/Creater';

import getData from './services/getData';
import getColumnNames from './services/getColumnNames';
import handleAddItem from './services/handleAddItem';

import headerList from './data/headerList.json';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

let path = headerList[0];
let data = [];

function App() {
  const [listPeople, setPeople] = useState([]);
  const [listPlanets, setPlanets] = useState([]);
  const [listStarships, setStarships] = useState([]);

  useEffect(() => {
    (async () => {
      let planetsData;
      if (localStorage.getItem('list-planets-key')) {
        planetsData = JSON.parse(localStorage.getItem('list-planets-key'));
      } else {
        planetsData = await getData('planets');
        localStorage.setItem('list-planets-key', JSON.stringify(planetsData));
      }
      setPlanets(planetsData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let peopleData;
      if (localStorage.getItem('list-people-key')) {
        peopleData = JSON.parse(localStorage.getItem('list-people-key'));
      } else {
        peopleData = await getData('people');
        localStorage.setItem('list-people-key', JSON.stringify(peopleData));
      }
      setPeople(peopleData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let starshipsData;
      if (localStorage.getItem('list-starships-key')) {
        starshipsData = JSON.parse(localStorage.getItem('list-starships-key'));
      } else {
        starshipsData = await getData('starships');
        localStorage.setItem('list-starships-key', JSON.stringify(starshipsData));
      }
      setStarships(starshipsData);
    })();
  }, []);

  const handleDeleteItem = (pathName, deleteNumber) => {
    if (pathName.toLowerCase() === 'planets') {
      const listPlanetsCopy = [...listPlanets];
      listPlanetsCopy.splice(deleteNumber, 1);
      data = [...listPlanetsCopy];
      localStorage.setItem('list-planets-key', JSON.stringify(data));
      setPlanets(data);
    } else if (pathName.toLowerCase() === 'starships') {
      const listStarshipsCopy = [...listStarships];
      listStarshipsCopy.splice(deleteNumber, 1);
      data = [...listStarshipsCopy];
      localStorage.setItem('list-starships-key', JSON.stringify(data));
      setStarships(data);
    } else if (pathName.toLowerCase() === 'people') {
      const listPeopleCopy = [...listPeople];
      listPeopleCopy.splice(deleteNumber, 1);
      data = [...listPeopleCopy];
      localStorage.setItem('list-people-key', JSON.stringify(data));
      setPeople(data);
    }
  };

  const getInitialData = () => {
    const columnNames = getColumnNames(path, listPlanets, listStarships, listPeople);
    return columnNames.reduce((cols, columnName) => {
      cols[columnName] = '';
      return cols;
    }, {});
  };

  const changeData = (event) => {
    path = event.currentTarget.textContent;
    if (path.toLowerCase() === 'planets') {
      data = [...listPlanets];
      localStorage.setItem('list-planets-key', JSON.stringify(data));
      setPlanets(data);
    } else if (path.toLowerCase() === 'starships') {
      data = [...listStarships];
      localStorage.setItem('list-starships-key', JSON.stringify(data));
      setStarships(data);
    } else if (path.toLowerCase() === 'people') {
      data = [...listPeople];
      localStorage.setItem('list-people-key', JSON.stringify(data));
      setPeople(data);
    }
  };

  return (
    <div className="wrapper">
      <Router>
        <Navbar
          headerList={headerList}
          changeData={changeData}
        />
        <Switch>
          <Route exact path="/">
            <main className="main">
              In this place will be Main Page. But I&apos;m not sure
              <span role="img" aria-label="">😄</span>
            </main>
          </Route>
          <Route path={(`/${path.toLowerCase()}`)}>
            <div className="table-wrapper">
              <Title titleDescriptor={path} />
              <Creater
                createrDescriptor={path.toLowerCase()}
              />
              <Table
                data={data}
                path={path.toLowerCase()}
                columns={getColumnNames(path, listPlanets, listStarships, listPeople)}
                tableDescriptor={path}
                onDeleteData={handleDeleteItem}
              />
            </div>
          </Route>
          <Route path="/form">
            <Form
              path={path.toLowerCase()}
              data={data}
              initialData={getInitialData()}
              columns={getColumnNames(path, listPlanets, listStarships, listPeople)}
              onAddData={handleAddItem}
              listPeople={listPeople}
              listPlanets={listPlanets}
              listStarships={listStarships}
              setPeople={setPeople}
              setPlanets={setPlanets}
              setStarships={setStarships}
            />
          </Route>
          <Route>
            <div className="error">404 : Page not found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
