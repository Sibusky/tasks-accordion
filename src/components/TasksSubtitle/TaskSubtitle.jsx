import React from 'react';

import './TasksSubtitle.css'

export default function TaskSubtitle() {
  return (
    <div className='tasks-subtitle'>
      <p className='tasks-subtitle__text'>Выполненные задачи</p>
      <div className='tasks-subtitle__arrow'></div>
    </div>
  );
}
