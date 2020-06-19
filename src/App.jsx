/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Creater from './components/Creater/Creater';
import getData from './services/getData';

import headerList from './data/headerList.json';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

let path = 'people';
let data;

function App() {
  const [listPeople, setPeople] = useState([]);
  const [listPlanets, setPlanets] = useState([]);
  const [listStarships, setStarships] = useState([]);

  useEffect(() => {
    (async () => {
      const planetsData = await getData('planets');
      setPlanets(planetsData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const peopleData = await getData('people');
      setPeople(peopleData);
    })();
  }, []);

  useEffect(() => {
    const getStarshipsData = async () => {
      const starshipsData = await getData('starships');
      setStarships(starshipsData);
    };
    getStarshipsData();
  }, []);

  const handleAppItem = (pathName, listData) => {
    if (pathName.toLowerCase() === 'planets') {
      data = [...listPlanets, listData];
      setPlanets(data);
    } else if (pathName.toLowerCase() === 'starships') {
      data = [...listStarships, listData];
      setStarships(data);
    } else if (pathName.toLowerCase() === 'people') {
      data = [...listPeople, listData];
      setPeople(data);
    }
  };

  const handleDeleteItem = (pathName, deleteNumber) => {
    if (pathName.toLowerCase() === 'planets') {
      const listPlanetsCopy = [...listPlanets];
      listPlanetsCopy.splice(deleteNumber, 1);
      data = [...listPlanetsCopy];
      setPlanets(data);
    } else if (pathName.toLowerCase() === 'starships') {
      const listStarshipsCopy = [...listStarships];
      listStarshipsCopy.splice(deleteNumber, 1);
      data = [...listStarshipsCopy];
      setStarships(data);
    } else if (pathName.toLowerCase() === 'people') {
      const listPeopleCopy = [...listPeople];
      listPeopleCopy.splice(deleteNumber, 1);
      data = [...listPeopleCopy];
      setPeople(data);
    }
  };

  const getColumnNames = () => {
    switch (path) {
      case 'planets': {
        return ((!listPlanets.length) ? [] : Object.keys(listPlanets[0]));
      }
      case 'starships': {
        return ((!listStarships.length) ? [] : Object.keys(listStarships[0]));
      }
      case 'people': {
        return ((!listPeople.length) ? [] : Object.keys(listPeople[0]));
      }
      default:
        return [];
    }
  };

  const getInitialData = () => getColumnNames().reduce((cols, columnName) => {
    cols[columnName] = '';
    return cols;
  }, {});

  const changeData = (event) => {
    path = event.currentTarget.textContent.toLowerCase();
    if (path === 'planets') {
      data = [...listPlanets];
      setPlanets(data);
    } else if (path === 'starships') {
      data = [...listStarships];
      setStarships(data);
    } else if (path === 'people') {
      data = [...listPeople];
      setPeople(data);
    }
  };

  return (
    <div className="wrapper">
      <Router>
        <Header
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
                createrDescriptor={path}
              />
              <Table
                data={data}
                path={path}
                columns={getColumnNames()}
                tableDescriptor={path}
                onDeleteData={handleDeleteItem}
              />
            </div>
          </Route>
          <Route path="/form">
            <Form
              path={path}
              initialData={getInitialData()}
              columns={getColumnNames()}
              onAddData={handleAppItem}
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
