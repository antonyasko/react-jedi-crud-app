/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';//

import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';
import inputValidation from '../../services/inputValidation';

import handleAddItem from '../../services/handleAddItem';

import { setPeople, setPlanets, setStarships } from '../../store/actions/actions';//
import { getAllPeople, getAllPlanets, getAllStarships } from '../../store/selectors/selectors';//

import './Form.scss';

const Form = ({
  data,
  path,
  // onAddData,
  initialData,
  columns,
  // listPeople,      //
  // listPlanets,     //
  // listStarships,     //
  // setPeople,     //
  // setPlanets,      //
  // setStarships,      //
}) => {
  const [personData, setData] = useState(initialData);

  const dispatch = useDispatch();//
  const listPeople = useSelector((state) => getAllPeople(state));//
  const listPlanets = useSelector((state) => getAllPlanets(state));//
  const listStarships = useSelector((state) => getAllStarships(state));//

  const handleClick = (event) => {
    const inputs = Array.from(document.getElementsByClassName('form-control'));

    if (inputs.every((input) => inputValidation(input, data))) {
      inputs.forEach((input) => {
        if (input.name === 'gender' && input.value === '') {
          input.value = 'n/a';
        }
      });
      handleAddItem(path.toLowerCase(), data, personData, listPeople, listPlanets, listStarships,
        setPeople, setPlanets, setStarships, dispatch);
    } else {
      event.preventDefault();
      inputs.forEach((input) => {
        inputValidation(input, data);
        if (!inputValidation(input, data)) {
          input.value = '';
        }
      });
    }
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const changeData = { ...personData };
    if (input.value !== '') {
      changeData[input.name] = input.value;
      setData(changeData);
    }
  };

  return (
    <div className="wrapper-form">
      <form className="input-form">
        {columns.map((columnName) => (
          <Input
            id={columnName}
            key={columnName}
            name={columnName}
            label={columnName}
            value={personData[columnName]}
            onChange={handleChange}
          />
        ))}
        <SaveButton
          path={path.toLowerCase()}
          onClick={handleClick}
          label="Save"
          classes="alert alert-danger"
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
  // onAddData: PropTypes.func.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  // listPeople: PropTypes.arrayOf(PropTypes.object).isRequired,      //
  // listPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,     //
  // listStarships: PropTypes.arrayOf(PropTypes.object).isRequired,     //
  // setPeople: PropTypes.func.isRequired,      //
  // setPlanets: PropTypes.func.isRequired,     //
  // setStarships: PropTypes.func.isRequired,     //
};

export default Form;
