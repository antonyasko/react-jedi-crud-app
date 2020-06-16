import React, { useState } from 'react';
import Input from "../Input/Input";
import SaveButton from "../SaveButton/SaveButton";
import './Form.scss';


const Form = ({path, columns, initialData, onAddData}) => {
  const [personData, setPersonData] = useState(initialData);

  const handleClick = (event) => {
    event.preventDefault();
    const inputs = Array.from(document.getElementsByClassName('form-control'));
    inputs.forEach((input) => {
      if (input.value === '') {
        input.classList.add('input-invalid');
      } 
      if (inputs.every(input => input.value !== '')) {
        onAddData(path, personData);
      }
    })
  }

  const handleChange = (event) => {
    const { currentTarget : input } = event;
    const data = {...personData};
    if (input.value !== '') {
      data[input.name] = input.value;
      setPersonData(data);
      input.classList.add('input-valid');
    }
  }

  return (
    <div className="wrapper-form">
      <form className="input-form">
        {columns.map( columnName => (
          <Input
            id={columnName}
            key={columnName}
            name={columnName}
            label={columnName}
            value={personData[columnName]}
            type="input"
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

export default Form;
