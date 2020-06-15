import React, { useState } from 'react';
import Input from "../Input/Input";
import SaveButton from "../SaveButton/SaveButton";
import 'bootstrap/dist/css/bootstrap.css';

const Form = ({path, columns, initialData, onAddData}) => {
  const [personData, setPersonData] = useState(initialData);

  const handleClick = (event) => {
    console.log(event)
    event.preventDefault();
    onAddData(personData);
  }

  const handleChange = (event) => {
    const { currentTarget : input } = event;
    const data = {...personData};
    data[input.name] = input.value;
    setPersonData(data)
  }

  return (
    <form className="input-form">
      {columns.map( columnName => (
        <Input
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
        label="Save"
        classes="alert alert-danger"
        onClick={handleClick}
      />
    </form>
  );
};

export default Form;
