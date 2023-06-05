import React from 'react';

import './TasksSubtitle.css';

export default function TaskSubtitle({ tasksId, setActiveTasks, subtitle }) {
  function handleClick(e) {
    setActiveTasks(tasksId);
  }

  return (
    <div className='tasks-subtitle' data-id={tasksId} onClick={handleClick}>
      <p className='tasks-subtitle__text'>{subtitle}</p>
      <div className='tasks-subtitle__arrow'></div>
    </div>
  );
}
