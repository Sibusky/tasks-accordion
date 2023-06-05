import React from 'react';

import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import Row from '../Row/Row';

import './FutureTasks.css';

export default function FutureTasks() {
  return (
    <div className='future-tasks'>
      <TaskSubtitle />
      <Row />
      <Row />
      <Row />
    </div>
  );
}
