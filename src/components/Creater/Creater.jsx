import React from 'react';
import { NavLink } from "react-router-dom";

import './Creater.scss';

function Creater({createrDescriptor, createrOnClick}) {
  return (
    <NavLink exact to={"/form"}>
      <button 
        onClick={createrOnClick} 
        className="button-creater">
          New {createrDescriptor}
      </button>
    </NavLink>

  )
}

export default Creater;
