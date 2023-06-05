import React from 'react';

import './TaskTable.css';
import Row from '../Row/Row';
import DoneTacks from '../DoneTasks/DoneTacks';
import TodaysTasks from '../TodaysTasks/TodaysTasks';
import FutureTasks from '../FutureTasks/FutureTasks';

export default function TaskTable() {
  return (
    <section className='section'>
      <div className='section__container'>
        <h3 className='section__title'>Задачи</h3>
        <div className='table-header'>
          <Row />
        </div>
        <DoneTacks />
        <TodaysTasks />
        <FutureTasks />
      </div>
    </section>
  );
}
