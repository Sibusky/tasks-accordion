import React, { useState } from 'react';

import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import Row from '../Row/Row';

import './TodaysTasks.css';

export default function TodaysTasks() {
  const [isTasksOpen, setIsTasksOpen] = useState(false);  

  return (
    <div className='tasks'>
      <TaskSubtitle isTasksOpen={isTasksOpen} setIsTasksOpen={setIsTasksOpen} />
      <div className={`rows ${isTasksOpen ? '' : 'height-0'}`}>
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}
