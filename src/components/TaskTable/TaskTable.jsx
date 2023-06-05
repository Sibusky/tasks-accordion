import React, { useEffect, useState } from 'react';

import Row from '../Row/Row';
// import DoneTacks from '../DoneTasks/DoneTacks';
// import TodaysTasks from '../TodaysTasks/TodaysTasks';
// import FutureTasks from '../FutureTasks/FutureTasks';
import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import { tasks } from '../../utils/tasks';

import './TaskTable.css';

export default function TaskTable() {
  const [activeTasks, setActiveTasks] = useState('today');
  const [doneTasks, setDoneTasks] = useState([]);
  const [todaysTasks, setTodaysTasks] = useState([]);
  const [futureTasks, setFutureTasks] = useState([]);

  useEffect(() => {
    const doneTasks = tasks.filter((task) => task.type === 'done');
    const todaysTasks = tasks.filter((task) => task.type === 'today');
    const futureTasks = tasks.filter((task) => task.type === 'future');
    setDoneTasks(doneTasks);
    setTodaysTasks(todaysTasks);
    setFutureTasks(futureTasks);
  }, []);

  return (
    <section className='section'>
      <div className='section__container'>
        <h3 className='section__title'>Задачи</h3>
        <div className='table-header'>
          <Row />
        </div>

        <div className='done-tasks'>
          <TaskSubtitle tasksId={'done'} setActiveTasks={setActiveTasks} />
          <div className={`rows ${activeTasks === 'done' ? '' : 'height-0'}`}>
            {doneTasks.map((task) => (
              <Row
                key={task.id}
                date={task.date}
                taskCode={task.taskCode}
                projectCode={task.projectCode}
                task={task.task}
                status={task.status[0]}
                responsible={task.responsible}
                shift={task.shift}
                priority={task.priority}
                comment={task.comment}
                timePlanned={task.timePlanned}
                timeFact={task.timeFact}
                start={task.start}
                finish={task.finish}
              />
            ))}
          </div>
        </div>

        <div className='todays-tasks'>
          <TaskSubtitle tasksId={'today'} setActiveTasks={setActiveTasks} />
          <div className={`rows ${activeTasks === 'today' ? '' : 'height-0'}`}>
            {todaysTasks.map((task) => (
              <Row
                key={task.id}
                date={task.date}
                taskCode={task.taskCode}
                projectCode={task.projectCode}
                task={task.task}
                status={task.status[0]}
                responsible={task.responsible}
                shift={task.shift}
                priority={task.priority}
                comment={task.comment}
                timePlanned={task.timePlanned}
                timeFact={task.timeFact}
                start={task.start}
                finish={task.finish}
              />
            ))}
          </div>
        </div>

        <div className='future-tasks'>
          <TaskSubtitle tasksId={'future'} setActiveTasks={setActiveTasks} />
          <div className={`rows ${activeTasks === 'future' ? '' : 'height-0'}`}>
            {futureTasks.map((task) => (
              <Row
                key={task.id}
                date={task.date}
                taskCode={task.taskCode}
                projectCode={task.projectCode}
                task={task.task}
                status={task.status[0]}
                responsible={task.responsible}
                shift={task.shift}
                priority={task.priority}
                comment={task.comment}
                timePlanned={task.timePlanned}
                timeFact={task.timeFact}
                start={task.start}
                finish={task.finish}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
