import React from 'react';

import './Main.css';

import Toolbar from '../Toolbar/Toolbar';
import TaskTable from '../TaskTable/TaskTable';

export default function Main({
  doneTasks,
  todaysTasks,
  futureTasks,
  selectedRow,
  activeTasks,
  setActiveTasks,
  handleClick,
  handleDuplicate,
  handleDelete,
}) {
  return (
    <main className='main'>
      <Toolbar
        selectedRow={selectedRow}
        handleDuplicate={handleDuplicate}
        handleDelete={handleDelete}
      />
      <TaskTable
        doneTasks={doneTasks}
        todaysTasks={todaysTasks}
        futureTasks={futureTasks}
        selectedRow={selectedRow}
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        handleClick={handleClick}
      />
    </main>
  );
}
