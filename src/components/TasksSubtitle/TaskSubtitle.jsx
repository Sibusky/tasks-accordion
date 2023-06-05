import React from 'react';

import './TasksSubtitle.css';

export default function TaskSubtitle({ tasksId, setActiveTasks }) {
  function handleClick(e) {
    setActiveTasks(tasksId);

    // console.log(e.currentTarget.closest('div').dataset.id)
  }

  return (
    <div className='tasks-subtitle' data-id={tasksId} onClick={handleClick}>
      <p className='tasks-subtitle__text'>Выполненные задачи</p>
      <div className='tasks-subtitle__arrow'></div>
    </div>
  );
}
