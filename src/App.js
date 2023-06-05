import { useCallback, useEffect, useState } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { tasks } from './utils/tasks';

function App() {
  const [activeTasks, setActiveTasks] = useState('today');
  const [tasksList, setTasksList] = useState([]);
  const [selectedRow, setSelectedRow] = useState('');

  useEffect(() => {
    setTasksList(tasks);
  }, []);

  const doneTasks = tasksList.filter((task) => task.type === 'done');
  const todaysTasks = tasksList.filter((task) => task.type === 'today');
  const futureTasks = tasksList.filter((task) => task.type === 'future');

  function handleRowClick(id) {
    setSelectedRow(id);
  }

  const handleDuplicate = useCallback(
    (id) => {
      const selectedRow = tasksList.filter((task) => task.id === id)[0];

      const duplicatedRow = {
        comment: selectedRow.comment,
        date: selectedRow.date,
        finish: selectedRow.finish,
        id: `${selectedRow.id}-${Date.now()}`,
        priority: selectedRow.priority,
        projectCode: selectedRow.projectCode,
        responsible: selectedRow.responsible,
        shift: selectedRow.shift,
        start: selectedRow.start,
        status: selectedRow.status,
        task: selectedRow.task,
        taskCode: selectedRow.taskCode,
        timeFact: selectedRow.timeFact,
        timePlanned: selectedRow.timePlanned,
        type: selectedRow.type,
      };

      setTasksList([
        ...tasksList.slice(0, tasksList.indexOf(selectedRow)),
        duplicatedRow,
        ...tasksList.slice(tasksList.indexOf(selectedRow)),
      ]);
    },
    [tasksList]
  );

  const handleDelete = useCallback(
    (id) => {
      setTasksList(tasksList.filter((task) => task.id !== id));
    },
    [tasksList]
  );

  return (
    <div className='App'>
      <Header />
      <Main
        doneTasks={doneTasks}
        todaysTasks={todaysTasks}
        futureTasks={futureTasks}
        selectedRow={selectedRow}
        activeTasks={activeTasks}
        setActiveTasks={setActiveTasks}
        handleClick={handleRowClick}
        handleDuplicate={handleDuplicate}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
