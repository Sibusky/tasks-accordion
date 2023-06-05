import React, { useState } from 'react';

import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import Row from '../Row/Row';

import './DoneTasks.css';

export default function DoneTacks() {
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
