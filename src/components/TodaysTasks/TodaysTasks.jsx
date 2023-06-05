import React from 'react';

import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import Row from '../Row/Row';

import './TodaysTasks.css';

export default function TodaysTasks() {
  return (
    <div className='todays-tasks'>
      <TaskSubtitle />
      <Row />
      <Row />
      <Row />
    </div>
  );
}
