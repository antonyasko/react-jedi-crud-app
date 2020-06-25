import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  id, name, label, value, onChange,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={id}
      name={name}
      className="form-control"
      type="input"
      value={value}
      placeholder={name}
      onChange={onChange}
      required
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
