import React, { useState } from 'react';

import Row from '../Row/Row';
// import DoneTacks from '../DoneTasks/DoneTacks';
// import TodaysTasks from '../TodaysTasks/TodaysTasks';
// import FutureTasks from '../FutureTasks/FutureTasks';
import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';

import './TaskTable.css';

export default function TaskTable() {
  const [activeTasks, setActiveTasks] = useState(1);

  return (
    <section className='section'>
      <div className='section__container'>
        <h3 className='section__title'>Задачи</h3>
        <div className='table-header'>
          <Row />
        </div>

        <div className='done-tasks'>
          <TaskSubtitle
            tasksId={1}
            setActiveTasks={setActiveTasks}
          />
          <div className={`rows ${activeTasks === 1 ? '' : 'height-0'}`}>
            <Row />
            <Row />
            <Row />
          </div>
        </div>

        <div className='todays-tasks'>
          <TaskSubtitle
            tasksId={2}
            setActiveTasks={setActiveTasks}
          />
          <div className={`rows ${activeTasks === 2 ? '' : 'height-0'}`}>
            <Row />
            <Row />
            <Row />
          </div>
        </div>

        <div className='future-tasks'>
          <TaskSubtitle
            tasksId={3}
            setActiveTasks={setActiveTasks}
          />
          <div className={`rows ${activeTasks === 3 ? '' : 'height-0'}`}>
            <Row />
            <Row />
            <Row />
          </div>
        </div>

        {/* <DoneTacks />
        <TodaysTasks />
        <FutureTasks /> */}
      </div>
    </section>
  );
}
