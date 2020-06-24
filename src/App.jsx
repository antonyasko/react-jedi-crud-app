/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Creater from './components/Creater/Creater';

import addStartData from './services/addStartData';
import getColumnNames from './services/getColumnNames';

import watchLoadPeople from './store/sagas/peopleSaga';
import watchLoadPlanets from './store/sagas/planetsSaga';
import watchLoadStarships from './store/sagas/starshipsSaga';

import { setPeople, loadPeople } from './store/actions/peopleActions';
import { setPlanets, loadPlanets } from './store/actions/planetsActions';
import { setStarships, loadStarships } from './store/actions/starshipsActions';

import { getAllPeople, getAllPlanets, getAllStarships } from './store/selectors/selectors';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

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

const App = ({ sagaMiddleware }) => {
  const dispatch = useDispatch();
  sagaMiddleware.run(watchLoadPeople);
  sagaMiddleware.run(watchLoadPlanets);
  sagaMiddleware.run(watchLoadStarships);

  const listPeople = useSelector((state) => getAllPeople(state));
  const listPlanets = useSelector((state) => getAllPlanets(state));
  const listStarships = useSelector((state) => getAllStarships(state));

  useEffect(() => {
    (() => {
      dispatch(loadPeople());
    })();
  }, []);

  useEffect(() => {
    (() => {
      dispatch(loadPlanets());
    })();
  }, []);

  useEffect(() => {
    (() => {
      dispatch(loadStarships());
    })();
  }, []);

  let data = addStartData(path, listPeople, listPlanets, listStarships);

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
};

App.propTypes = {
  sagaMiddleware: PropTypes.func.isRequired,
};
export default App;
