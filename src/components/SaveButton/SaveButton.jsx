import React from 'react';
import { NavLink } from "react-router-dom";

const SaveButton = ({path, prePath, onClick, label, classes, disabled}) => {
  return (
    <NavLink exact to={`/${path}`}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={classes}
      >
        {label}
      </button>
    </NavLink>
  );
};

export default SaveButton;
