import React, { useState } from 'react';

import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import Row from '../Row/Row';

import './FutureTasks.css';

export default function FutureTasks() {
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  return (
    <div
      className={`future-tasks ${isTasksOpen ? '' : 'height-0'}`}
      onClick={() => setIsTasksOpen(!isTasksOpen)}
    >
      <TaskSubtitle />
      <Row />
      <Row />
      <Row />
    </div>
  );
}
