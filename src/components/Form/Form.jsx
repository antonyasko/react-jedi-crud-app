/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';

import handleAddItem from '../../services/handleAddItem';
import inputValidation from '../../services/inputValidation';

import { setPeople } from '../../store/actions/peopleActions';
import { setPlanets } from '../../store/actions/planetsActions';
import { setStarships } from '../../store/actions/starshipsActions';
import { getAllPeople, getAllPlanets, getAllStarships } from '../../store/selectors/selectors';

import './Form.scss';

const Form = ({
  data, path, initialData, columns,
}) => {
  const [personData, setData] = useState(initialData);

  const dispatch = useDispatch();
  const listPeople = useSelector((state) => getAllPeople(state));
  const listPlanets = useSelector((state) => getAllPlanets(state));
  const listStarships = useSelector((state) => getAllStarships(state));

  const handleClick = (event) => {
    const inputs = Array.from(document.getElementsByClassName('form-control'));

    if (inputs.every((input) => inputValidation(input, data))) {
      handleAddItem(path, personData, listPeople, listPlanets, listStarships,
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
            onChange={handleChange}
            value={personData[columnName]}
          />
        ))}
        <SaveButton
          label="Save"
          onClick={handleClick}
          path={path.toLowerCase()}
          classes="alert alert-danger"
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Form;
