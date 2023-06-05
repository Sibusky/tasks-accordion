import { useEffect, useState } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { tasks } from './utils/tasks';

function App() {
  const [activeTasks, setActiveTasks] = useState('today');
  const [doneTasks, setDoneTasks] = useState([]);
  const [todaysTasks, setTodaysTasks] = useState([]);
  const [futureTasks, setFutureTasks] = useState([]);
  const [selectedRow, setSelectedRow] = useState('');

  useEffect(() => {
    const doneTasks = tasks.filter((task) => task.type === 'done');
    const todaysTasks = tasks.filter((task) => task.type === 'today');
    const futureTasks = tasks.filter((task) => task.type === 'future');
    setDoneTasks(doneTasks);
    setTodaysTasks(todaysTasks);
    setFutureTasks(futureTasks);
  }, []);

  function handleRowClick(id) {
    setSelectedRow(id);
  }

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
      />
      <Footer />
    </div>
  );
}

export default App;
