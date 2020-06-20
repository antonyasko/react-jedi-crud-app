/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';

import './Form.scss';

const Form = ({
  path,
  data,
  columns,
  initialData,
  onAddData,
  listPeople,
  listPlanets,
  listStarships,
  setPeople,
  setPlanets,
  setStarships,
}) => {
  const [personData, setData] = useState(initialData);

  const handleClick = (event) => {
    const inputs = Array.from(document.getElementsByClassName('form-control'));
    inputs.forEach((inputItem) => {
      if (inputItem.value === '') {
        event.preventDefault();
        inputItem.classList.add('input-invalid');
      }
      if (inputs.every((item) => item.value !== '')) {
        onAddData(path.toLowerCase(), data, personData, listPlanets, listPeople, listStarships,
          setPlanets, setPeople, setStarships);
        inputItem.value = '';
      }
    });
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const changeData = { ...personData };
    if (input.value !== '') {
      changeData[input.name] = input.value;
      setData(changeData);
      input.classList.add('input-valid');
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
  path: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialData: PropTypes.objectOf(PropTypes.string).isRequired,
  onAddData: PropTypes.func.isRequired,
  listPeople: PropTypes.arrayOf(PropTypes.object).isRequired,
  listPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
  listStarships: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPeople: PropTypes.func.isRequired,
  setPlanets: PropTypes.func.isRequired,
  setStarships: PropTypes.func.isRequired,
};

export default Form;
