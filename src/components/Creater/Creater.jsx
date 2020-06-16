import React from 'react';
import { NavLink } from "react-router-dom";

import './Creater.scss';

function Creater({createrDescriptor}) {
  return (
    <NavLink to={"/form"}>
      <button 
        className="button-creater">
          New {createrDescriptor}
      </button>
    </NavLink>

  )
}

export default Creater;
