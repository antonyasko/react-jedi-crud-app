/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';

import './Form.scss';

const Form = ({
  path, columns, initialData, onAddData,
}) => {
  const [personData, setPersonData] = useState(initialData);

  const handleClick = (event) => {
    const inputs = Array.from(document.getElementsByClassName('form-control'));
    inputs.forEach((inputItem) => {
      if (inputItem.value === '') {
        event.preventDefault();
        inputItem.classList.add('input-invalid');
      }
      if (inputs.every((item) => item.value !== '')) {
        onAddData(path.toLowerCase(), personData);
        inputItem.value = '';
      }
    });
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...personData };
    if (input.value !== '') {
      data[input.name] = input.value;
      setPersonData(data);
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
          path={path}
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
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialData: PropTypes.objectOf(PropTypes.string).isRequired,
  onAddData: PropTypes.func.isRequired,
};

export default Form;
