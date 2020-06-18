import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './SaveButton.scss';

const SaveButton = ({
  // path, onClick, label, classes, disabled,
  path, onClick, label, classes,
}) => (
  <NavLink to={`/${path.toLowerCase()}`}>
    <button
      onClick={onClick}
      className={`save-button ${classes}`}
      type="button"
    >
      {label}
    </button>
  </NavLink>
);

SaveButton.propTypes = {
  path: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SaveButton;
