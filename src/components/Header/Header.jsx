import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

function Header({headerList, changeData}) {
    return (
        <header className="header">
            <h1 className="logo">JEDI</h1>
            <nav className="navbar">
              <ul>
                {headerList.map((item) => (
                  <NavLink key={item} to={`/${item.toLowerCase()}`}>
                    <li>
                      <button onClick={changeData}>{item}</button>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </nav>
        </header>
    )
}

export default Header;
