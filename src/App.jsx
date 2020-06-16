import React, { useState } from 'react';
import Table from "./components/Table/Table";
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import Creater from './components/Creater/Creater';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import dataPeople from './data/dataPeople.json'
import dataPlanets from './data/dataPlanets.json'
import dataStarships from './data/dataStarships.json'
import headerList from './data/headerList.json'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

let path = 'people';
let data = dataPeople;

let columns = Object.keys(data[0]);

function App() {
  const [listPeople, setPeople] = useState(dataPeople);
  const [listPlanets, setPlanets] = useState(dataPlanets);
  const [listStarships, setStarships] = useState(dataStarships);
  
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
  }

  const handleAppItem = (path, listData) => {
    if (path.toLowerCase() === 'planets') {
      data = [...listPlanets, listData];
      setPlanets(data);
    } else if (path.toLowerCase() === 'starships') {
      data = [...listStarships, listData];
      setStarships(data);
    } else if (path.toLowerCase() === 'people') {
      data = [...listPeople, listData];
      setPeople(data);
    }
  }

  const handleDeleteItem = (path, deleteNumber) => {
    if (path.toLowerCase() === 'planets') {
      const listPlanetsCopy = [...listPlanets];
      listPlanetsCopy.splice(deleteNumber, 1);
      data = [...listPlanetsCopy];
      setPlanets(data);
    } else if (path.toLowerCase() === 'starships') {
      const listStarshipsCopy = [...listStarships];
      listStarshipsCopy.splice(deleteNumber, 1);
      data = [...listStarshipsCopy];
      setStarships(data);
    } else if (path.toLowerCase() === 'people') {
      const listPeopleCopy = [...listPeople];
      listPeopleCopy.splice(deleteNumber, 1);
      data = [...listPeopleCopy];
      setPeople(data);
    }
  }

  const getInitialData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  return (
    <div className="wrapper">
      <Router>
        <Header 
          headerList={headerList} 
          changeData={changeData}
        />
        <Switch>
          <Route exact path="/">
            <main className="main">In this place will be Main Page. But I'm not sure😄</main>
          </Route>
          <Route path={(`/${path.toLowerCase()}`)}>
            <div className="table-wrapper">
              <Title titleDescriptor={path}/>
              <Creater 
                createrDescriptor={path}
              /> 
              <Table
                data={data}
                path={path}
                columns={columns}
                tableDescriptor={path}
                onDeleteData={handleDeleteItem}
              />
            </div>
          </Route>
          <Route path="/form">
            <Form
              path={path}
              initialData={getInitialData()}
              columns={columns}
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
