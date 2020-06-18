import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

function Title({ titleDescriptor }) {
  return (
    <h2 className="title">
      {titleDescriptor}
      {' '}
      from Star Wars Universe
    </h2>
  );
}

Title.propTypes = {
  titleDescriptor: PropTypes.string.isRequired,
};

export default Title;
