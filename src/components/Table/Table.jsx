import React from 'react';
import { NavLink } from "react-router-dom";

import './Table.scss'

function Table({data, path, columns, tableDescriptor, onDeleteData}) {
  const deleteRow = (event) => {
    const deleteRow = event.currentTarget.closest('tr').firstChild.textContent - 1;
    onDeleteData(path.toLowerCase(), deleteRow);
  }

  return (
    <table className="table">
      <thead className="table-head">
      <tr>
        <th scope="col">{tableDescriptor}</th>
        {columns.map(columnTitle => (
          <th key={columnTitle} scope="col">{columnTitle}</th>
        ))}
        <td></td>
      </tr>
      </thead>
      <tbody className="table-body">
      {data.map((item, index) => (
        <tr id={`row-${item.id}`} key={item.id} className={index % 2 ? "even-row" : "odd-row"}>
          <th scope="row">{++index}</th>
          {columns.map(columnTitle => (
            (columnTitle === 'name') 
            ? <td key={item[columnTitle]+columnTitle}>
                <NavLink to={"/form"}>
                  {item[columnTitle]}
                </NavLink>
              </td>
            : <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
          ))}
          <td>
            <button className="delete-button" onClick={deleteRow}>Delete</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table;
