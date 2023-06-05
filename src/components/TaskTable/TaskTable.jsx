import React, { useEffect, useState } from 'react';

import Row from '../Row/Row';
import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';
import { tasks } from '../../utils/tasks';

import './TaskTable.css';

export default function TaskTable() {
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
    <section className='section'>
      <div className='section__container'>
        <h3 className='section__title'>Задачи</h3>
        <div className='table-header'>
          <Row
            type='table-header'
            handleClick={handleRowClick}
            date='Дата'
            taskCode='Шифр задачи'
            projectCode='Шифр проекта'
            task='Задача'
            status='Статус'
            responsible='Ответственный'
            shift='Переназначить'
            priority='Приоритет'
            comment='Комментарий'
            timePlanned='План время'
            timeFact='Факт время'
            start='Начало'
            finish='Завершение'
          />
        </div>

        <div className='done-tasks'>
          <TaskSubtitle
            tasksId={'done'}
            setActiveTasks={setActiveTasks}
            subtitle='Выполненные задачи'
          />
          <div className={`rows ${activeTasks === 'done' ? '' : 'height-0'}`}>
            {doneTasks.map((task) => (
              <Row
                type='table-row'
                selectedRow={selectedRow}
                handleClick={handleRowClick}
                key={task.id}
                id={task.id}
                date={task.date}
                taskCode={task.taskCode}
                projectCode={task.projectCode}
                task={task.task}
                status={task.status}
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
          <TaskSubtitle
            tasksId={'today'}
            setActiveTasks={setActiveTasks}
            subtitle='Задачи на сегодня'
          />
          <div className={`rows ${activeTasks === 'today' ? '' : 'height-0'}`}>
            {todaysTasks.map((task) => (
              <Row
                type='table-row'
                selectedRow={selectedRow}
                handleClick={handleRowClick}
                key={task.id}
                id={task.id}
                date={task.date}
                taskCode={task.taskCode}
                projectCode={task.projectCode}
                task={task.task}
                status={task.status}
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
          <TaskSubtitle
            tasksId={'future'}
            setActiveTasks={setActiveTasks}
            subtitle='Предстоящие задачи'
          />
          <div className={`rows ${activeTasks === 'future' ? '' : 'height-0'}`}>
            {futureTasks.map((task) => (
              <Row
                type='table-row'
                selectedRow={selectedRow}
                handleClick={handleRowClick}
                key={task.id}
                id={task.id}
                date={task.date}
                taskCode={task.taskCode}
                projectCode={task.projectCode}
                task={task.task}
                status={task.status}
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
