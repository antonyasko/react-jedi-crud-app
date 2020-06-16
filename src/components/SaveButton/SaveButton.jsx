import React from 'react';
import { NavLink } from "react-router-dom";

import './SaveButton.scss';

const SaveButton = ({path, onClick, label, classes, disabled}) => {
  return (
    <NavLink to={`/${path.toLowerCase()}`}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`save-button ${classes}`}
      >
        {label}
      </button>
    </NavLink>
  );
};

export default SaveButton;
