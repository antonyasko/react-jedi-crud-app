import React from 'react';
import './Input.scss';

const Input = ({id, name, label, error, ...rest}) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={id}
          name={name}
          {...rest}
          className="form-control"
          required
        />
    </div>
  );
};

export default Input;
