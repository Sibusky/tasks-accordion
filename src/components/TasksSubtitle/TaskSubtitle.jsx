import React from 'react';

import './TasksSubtitle.css';

export default function TaskSubtitle({
  tasksId,
  activeTasks,
  setActiveTasks,
  subtitle,
}) {
  function handleClick() {
    setActiveTasks(tasksId);
  }

  return (
    <div
      className='tasks-subtitle button'
      data-id={tasksId}
      onClick={handleClick}
    >
      <h4 className='tasks-subtitle__text text h4'>{subtitle}</h4>
      {activeTasks === tasksId ? (
        <div className='tasks-subtitle__arrow'></div>
      ) : (
        <div className='tasks-subtitle__arrow tasks-subtitle__arrow-rotated'></div>
      )}
    </div>
  );
}
