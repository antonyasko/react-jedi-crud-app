import React, { useState } from 'react';
import Input from "../Input/Input";
import SaveButton from "../SaveButton/SaveButton";

const Form = ({path, prePath, columns, initialData, onAddData}) => {
  const [personData, setPersonData] = useState(initialData);

  const handleClick = (event) => {
    // event.preventDefault();
    onAddData(personData);
  }

  const handleChange = (event) => {
    const { currentTarget : input } = event;
    const data = {...personData};
    data[input.name] = input.value;
    setPersonData(data)
  }

  return (
    <div className="wrapper-form" style={{width: "740px", margin: "0 auto"}}>
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
          prePath={prePath}
          onClick={handleClick}
          label="Save"
          classes="alert alert-danger"
        />
      </form>
    </div>
  );
};

export default Form;
