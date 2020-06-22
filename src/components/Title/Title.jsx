import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ titleDescriptor }) => (
  <h2 className="title">
    {`${titleDescriptor[0].toUpperCase()}${titleDescriptor.slice(1)} from Star Wars Universe`}
  </h2>
);

Title.propTypes = {
  titleDescriptor: PropTypes.string.isRequired,
};

export default Title;
