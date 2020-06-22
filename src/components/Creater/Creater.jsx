import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Creater.scss';

const Creater = ({ createrDescriptor }) => (
  <NavLink to="/form">
    <button
      type="button"
      className="button-creater"
    >
      {`New ${createrDescriptor}`}
    </button>
  </NavLink>
);

Creater.propTypes = {
  createrDescriptor: PropTypes.string.isRequired,
};

export default Creater;
