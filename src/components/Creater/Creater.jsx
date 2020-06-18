import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Creater.scss';

function Creater({ createrDescriptor }) {
  return (
    <NavLink to="/form">
      <button
        type="button"
        className="button-creater"
      >
        New
        {' '}
        {createrDescriptor}
      </button>
    </NavLink>

  );
}

Creater.propTypes = {
  createrDescriptor: PropTypes.string.isRequired,
};

export default Creater;
