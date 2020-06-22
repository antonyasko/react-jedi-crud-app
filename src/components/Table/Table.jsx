/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Table.scss';

function Table({
  data, path, columns, tableDescriptor, onDeleteData,
}) {
  const deleteRow = (event) => {
    const rowNumber = event.currentTarget.closest('tr').firstChild.textContent - 1;
    onDeleteData(path.toLowerCase(), rowNumber);
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
              <button className="delete-button" type="button" onClick={deleteRow}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  path: PropTypes.string.isRequired,
  tableDescriptor: PropTypes.string.isRequired,
  onDeleteData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
