import React from 'react';
import './Table.scss'

function Table({columns, data, tableDescriptor, list}) {
  const deleteRow = (event) => {
    // event.currentTarget.closest('tr').remove();
    event.currentTarget.closest('tr').style.display = 'none'; 
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
            <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
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
