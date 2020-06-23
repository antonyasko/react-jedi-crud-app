/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deletePeople } from '../../store/actions/peopleActions';
import { deletePlanets } from '../../store/actions/planetsActions';
import { deleteStarships } from '../../store/actions/starshipsActions';

import './Table.scss';

const Table = ({
  data, columns, tableDescriptor,
}) => {
  const dispatch = useDispatch();

  const deleteRow = (id) => {
    switch (window.location.pathname.slice(1)) {
      case 'people': {
        dispatch(deletePeople(id));
        break;
      }
      case 'planets': {
        dispatch(deletePlanets(id));
        break;
      }
      case 'starships': {
        dispatch(deleteStarships(id));
        break;
      }
      default:
        break;
    }
  };

  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnTitle) => (
            <th key={columnTitle} scope="col">{columnTitle}</th>
          ))}
          <th>beloved</th>
          <td />
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((item, index) => (
          <tr id={`row-${item.id}`} key={item.id} className={index % 2 ? 'even-row' : 'odd-row'}>
            <th scope="row">{++index}</th>
            {columns.map((columnTitle) => (
              (columnTitle === 'name')
                ? (
                  <td key={item[columnTitle] + columnTitle}>
                    <NavLink to="/form">
                      <button type="button">
                        {item[columnTitle]}
                      </button>
                    </NavLink>
                  </td>
                )
                : <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
            ))}
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <button className="delete-button" type="button" onClick={() => deleteRow(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableDescriptor: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
