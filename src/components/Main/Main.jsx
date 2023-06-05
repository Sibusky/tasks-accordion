import React from 'react';

import './Main.css';

import Toolbar from '../Toolbar/Toolbar';
import TaskTable from '../TaskTable/TaskTable';
import Spinner from '../UI/Spinner/Spinner';

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
  isLoading,
}) {
  return (
    <main className='main'>
      <div className='main__container'>
        <Toolbar
          selectedRow={selectedRow}
          handleDuplicate={handleDuplicate}
          handleDelete={handleDelete}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <TaskTable
            doneTasks={doneTasks}
            todaysTasks={todaysTasks}
            futureTasks={futureTasks}
            selectedRow={selectedRow}
            activeTasks={activeTasks}
            setActiveTasks={setActiveTasks}
            handleClick={handleClick}
          />
        )}
      </div>
    </main>
  );
}
