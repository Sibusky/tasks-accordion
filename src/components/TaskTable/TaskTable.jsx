import React from 'react';

import './TaskTable.css';
import Row from '../Row/Row';
import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';

export default function TaskTable() {
  return (
    <section className='section'>
      <div className='section__container'>
        <h3 className='section__title'>Задачи</h3>
        <div className='table-header'>
          <Row />
        </div>
        <div className='done-tasks'>
          <TaskSubtitle />
          <Row />
          <Row />
          <Row />
        </div>
        <div className='todays-tasks'>
          <TaskSubtitle />
          <Row />
          <Row />
          <Row />
        </div>
        <div className='future-tasks'>
          <TaskSubtitle />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
