/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Creater from './components/Creater/Creater';

import getData from './services/getData';
import addStartData from './services/addStartData';
import getColumnNames from './services/getColumnNames';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { setPeople, setPlanets, setStarships } from './store/actions/actions';
import { getAllPeople, getAllPlanets, getAllStarships } from './store/selectors/selectors';

import headerList from './data/headerList.json';

let path = headerList[0].toLowerCase();

if (headerList.some((item) => item.toLowerCase()
=== window.location.pathname.slice(1).toLowerCase())
&& window.location.pathname.slice(1) !== '') {
  path = window.location.pathname.slice(1).toLowerCase();
} else if (window.location.pathname.slice(1) === '') {
  path = '';
}

if (window.location.href === `${window.location.origin}/`) {
  window.location.replace(`${origin}/people`);
}

function App() {
  const dispatch = useDispatch();
  const listPeople = useSelector((state) => getAllPeople(state));
  const listPlanets = useSelector((state) => getAllPlanets(state));
  const listStarships = useSelector((state) => getAllStarships(state));

  useEffect(() => {
    (async () => {
      let peopleData;
      if (localStorage.getItem('list-people-key')) {
        peopleData = JSON.parse(localStorage.getItem('list-people-key'));
      } else {
        peopleData = await getData('people');
        localStorage.setItem('list-people-key', JSON.stringify(peopleData));
      }
      dispatch(setPeople(peopleData));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let planetsData;
      if (localStorage.getItem('list-planets-key')) {
        planetsData = JSON.parse(localStorage.getItem('list-planets-key'));
      } else {
        planetsData = await getData('planets');
        localStorage.setItem('list-planets-key', JSON.stringify(planetsData));
      }
      dispatch(setPlanets(planetsData));
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
      dispatch(setStarships(starshipsData));
    })();
  }, []);

  let data = addStartData(path, listPeople, listPlanets, listStarships);

  const handleDeleteItem = (pathName, deleteNumber) => {
    if (pathName.toLowerCase() === 'people') {
      if (listPeople.length > 1) {
        const listPeopleCopy = [...listPeople];
        listPeopleCopy.splice(deleteNumber, 1);
        data = [...listPeopleCopy];
        localStorage.setItem('list-people-key', JSON.stringify(data));
        dispatch(setPeople(data));
      } else {
        alert('Can not remove last element');
      }
    } else if (pathName.toLowerCase() === 'planets') {
      if (listPlanets.length > 1) {
        const listPlanetsCopy = [...listPlanets];
        listPlanetsCopy.splice(deleteNumber, 1);
        data = [...listPlanetsCopy];
        localStorage.setItem('list-planets-key', JSON.stringify(data));
        dispatch(setPlanets(data));
      } else {
        alert('Can not remove last element');
      }
    } else if (pathName.toLowerCase() === 'starships') {
      if (listStarships.length > 1) {
        const listStarshipsCopy = [...listStarships];
        listStarshipsCopy.splice(deleteNumber, 1);
        data = [...listStarshipsCopy];
        localStorage.setItem('list-starships-key', JSON.stringify(data));
        dispatch(setStarships(data));
      } else {
        alert('Can not remove last element');
      }
    }
  };

  const getInitialData = () => {
    const columnNames = getColumnNames(path, listPeople, listPlanets, listStarships);
    return columnNames.reduce((cols, columnName) => {
      cols[columnName] = '';
      return cols;
    }, {});
  };

  const changeData = (event) => {
    path = event.currentTarget.textContent;
    if (path.toLowerCase() === 'people') {
      data = [...listPeople];
      localStorage.setItem('list-people-key', JSON.stringify(data));
      dispatch(setPeople(data));
    } else if (path.toLowerCase() === 'planets') {
      data = [...listPlanets];
      localStorage.setItem('list-planets-key', JSON.stringify(data));
      dispatch(setPlanets(data));
    } else if (path.toLowerCase() === 'starships') {
      data = [...listStarships];
      localStorage.setItem('list-starships-key', JSON.stringify(data));
      dispatch(setStarships(data));
    }
  };

  return (
    <div className="wrapper">
      <Router>
        <Navbar
          path={path}
          headerList={headerList}
          changeData={changeData}
        />
        <Switch>
          <Route exact path="/">
            <main className="main">
              In this place will be Main Page. But I&apos;m not sure
              <span role="img" aria-label="smile">😄</span>
            </main>
          </Route>
          <Route path={(`/${path.toLowerCase()}`)}>
            <div className="table-wrapper">
              <Title titleDescriptor={path} />
              <Creater createrDescriptor={path.toLowerCase()} />
              <Table
                data={data}
                tableDescriptor={path}
                path={path.toLowerCase()}
                onDeleteData={handleDeleteItem}
                columns={getColumnNames(path, listPeople, listPlanets, listStarships)}
              />
            </div>
          </Route>
          <Route path="/form">
            {data.length !== 0
              ? (
                <Form
                  data={data}
                  path={path.toLowerCase()}
                  initialData={getInitialData()}
                  columns={getColumnNames(path, listPeople, listPlanets, listStarships)}
                />
              ) : <div className="error">Firstly select the page you want</div>}
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
