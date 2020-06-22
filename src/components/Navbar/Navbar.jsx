import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.scss';

function Header({ headerList, changeData }) {
  return (
    <header className="header">
      <NavLink exact to="/">
        <h1 className="logo">JEDI</h1>
      </NavLink>
      <nav className="navbar">
        <ul>
          {headerList.map((item) => (
            <NavLink key={item} to={`/${item.toLowerCase()}`}>
              <li>
                <button
                  className={
                    (window.location.pathname.slice(1) === item.toLowerCase())
                      ? 'active' : ''
                    }
                  type="button"
                  onClick={changeData}
                >
                  {item}
                </button>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  changeData: PropTypes.func.isRequired,
  headerList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
