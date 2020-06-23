import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './SaveButton.scss';

const SaveButton = ({
  label, onClick, path, classes,
}) => (
  <NavLink to={`/${path.toLowerCase()}`}>
    <button
      type="button"
      onClick={onClick}
      className={`save-button ${classes}`}
    >
      {label}
    </button>
  </NavLink>
);

SaveButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

export default SaveButton;
