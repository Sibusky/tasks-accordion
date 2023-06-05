import React from 'react';

import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import Row from '../Row/Row';

import './DoneTasks.css';

export default function DoneTacks() {
  return (
    <div className='done-tasks'>
      <TaskSubtitle />
      <Row />
      <Row />
      <Row />
    </div>
  );
}
