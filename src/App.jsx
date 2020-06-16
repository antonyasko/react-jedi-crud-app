import React, { useState } from 'react';
import Table from "./components/Table/Table";
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Creater from './components/Creater/Creater'
import dataPeople from './data/dataPeople.json'
import dataPlanets from './data/dataPlanets.json'
import dataStarships from './data/dataStarships.json'

import headerList from './data/headerList.json'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

let path = 'People';
let data = dataPeople;

let columns = Object.keys(data[0]);
console.log(columns);

function App() {
  const [listPeople, setPeople] = useState(dataPeople);
  const [listPlanets, setPlanets] = useState(dataPlanets);
  const [listStarships, setStarships] = useState(dataStarships);
  
  const changeData = (event) => {
    path = event.currentTarget.textContent;
    if (path === 'Planets') {
      data = [...listPlanets];
      setPlanets(data);
    } else if (path === 'Starships') {
      data = [...listStarships];
      setStarships(data);
    } else {
      data = [...listPeople];
      setPeople(data);
    }
  }

  const handleAppItem = (path, listData) => {
    if (path === 'Planets') {
      data = [...listPlanets, listData];
      setPlanets(data);
    } else if (path === 'Starships') {
      data = [...listStarships, listData];
      setStarships(data);
    } else if (path === 'People') {
      data = [...listPeople, listData];
      setPeople(data);
    }
  }

  const getInitialPeopleData = () => {
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
            <main className="main">
              In this place will be Main Page. But I'm not sure.
            </main>
          </Route>
          <Route exact path={`/${path}`}>
            <div className="table-wrapper">
            <Title titleDescriptor={path}/>
            <Creater 
              createrDescriptor={path}
            /> 
            <Table
              data={data}
              columns={columns}
              tableDescriptor={path}
            />
          </div>
          </Route>
          <Route exact path="/form">
            <Form
              path={path}
              initialData={getInitialPeopleData()}
              columns={columns}
              onAddData={handleAppItem}
            />
          </Route>
          <Route>
            <div className="error">
              404 : Page not found
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
