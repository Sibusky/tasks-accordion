import React, { useState } from 'react';

import './Row.css';

export default function Row({
  type,
  selectedRow,
  handleClick,
  id,
  date,
  taskCode,
  projectCode,
  task,
  status,
  responsible,
  shift,
  priority,
  comment,
  timePlanned,
  timeFact,
  start,
  finish,
}) {
  const [select, setSelect] = useState('В работе');

  function handleChangStatus(e) {
    setSelect(e.target.value);
  }

  return (
    <div
      className={`row-template ${
        selectedRow === id && type === 'table-row' ? 'row-selected' : ''
      }`}
      onClick={() => handleClick(id)}
    >
      <div className='date'>{date}</div>
      <div className='task-code'>{taskCode}</div>
      <div className='project-code'>{projectCode}</div>
      <div className='task'>{task}</div>
      {type === 'table-header' ? (
        <div className='status'>{status}</div>
      ) : (
        <div className='status'>
          <select
            className='select'
            value={select}
            onChange={(e) => handleChangStatus(e)}
          >
            {status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className='responsible'>{responsible}</div>
      <div className='shift'>{shift}</div>
      <div className='priority'>{priority}</div>
      <div className='comment'>{comment}</div>
      <div className='time-planned'>{timePlanned}</div>
      <div className='time-fact'>{timeFact}</div>
      <div className='start'>{start}</div>
      <div className='finish'>{finish}</div>
    </div>
  );
}
