import React from 'react';
import './Title.scss';

function Title({titleDescriptor}) {
  return (
    <h2 className="title">{titleDescriptor} from Star Wars Universe</h2>
  )
}

export default Title;
