import React from 'react';

import './Row.css';

export default function Row({
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
  return (
    <div className='row-template'>
      <div className='date'>{date}</div>
      <div className='task-code'>{taskCode}</div>
      <div className='project-code'>{projectCode}</div>
      <div className='task'>{task}</div>
      <div className='status'>{status}</div>
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
