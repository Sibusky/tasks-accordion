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
      } ${type === 'table-row' ? 'button' : ''}`}
      onClick={() => handleClick(id)}
    >
      <div className='cell date'>
        <p className='text'>{date}</p>
      </div>
      <div className='cell task-code'>
        <p className='text'>{taskCode}</p>
      </div>
      <div className='cell project-code'>
        <p className='text'>{projectCode}</p>
      </div>
      <div className='cell task'>
        <p className='text'>{task}</p>
      </div>
      {type === 'table-header' ? (
        <div className='cell status'>
          <p className='text'>{status}</p>
        </div>
      ) : (
        <div className='cell status'>
          <select
            className='select text'
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
      <div className='cell responsible'>
        <p className='text'>{responsible}</p>
      </div>
      <div className='cell shift'>
        <p className='text'>{shift}</p>
      </div>
      <div className='cell priority'>
        <p className='text'>{priority}</p>
      </div>
      <div className='cell comment'>
        <p className='text'>{comment}</p>
      </div>
      <div className='cell time-planned'>
        <p className='text'>{timePlanned}</p>
      </div>
      <div className='cell time-fact'>
        <p className='text'>{timeFact}</p>
      </div>
      <div className='cell start'>
        <p className='text'>{start}</p>
      </div>
      <div className='cell finish'>
        <p className='text'>{finish}</p>
      </div>
    </div>
  );
}
