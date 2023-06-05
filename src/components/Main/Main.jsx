import React from 'react';

import './Main.css';

import Toolbar from '../Toolbar/Toolbar';
import TaskTable from '../TaskTable/TaskTable';

export default function Main() {
  return (
    <main className='main'>
      <Toolbar />
      <TaskTable />
    </main>
  );
}
