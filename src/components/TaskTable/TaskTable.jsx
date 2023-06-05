import React from 'react';

import Row from '../Row/Row';
import TaskSubtitle from '../TasksSubtitle/TaskSubtitle';

import './TaskTable.css';

export default function TaskTable({
  doneTasks,
  todaysTasks,
  futureTasks,
  selectedRow,
  activeTasks,
  setActiveTasks,
  handleClick,
}) {
  return (
    <section className='table'>
      <div className='table__container'>
        <h3 className='table__title text h3'>Задачи</h3>
        <div className='table-header'>
          <Row
            type='table-header'
            handleClick={handleClick}
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

        <div className='done-tasks tasks'>
          <TaskSubtitle
            tasksId={'done'}
            activeTasks={activeTasks}
            setActiveTasks={setActiveTasks}
            subtitle='Выполненные задачи'
          />
          <div className={`rows ${activeTasks === 'done' ? '' : 'height-0'}`}>
            {doneTasks.map((task) => (
              <Row
                type='table-row'
                selectedRow={selectedRow}
                handleClick={handleClick}
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

        <div className='todays-tasks tasks'>
          <TaskSubtitle
            tasksId={'today'}
            activeTasks={activeTasks}
            setActiveTasks={setActiveTasks}
            subtitle='Задачи на сегодня'
          />
          <div className={`rows ${activeTasks === 'today' ? '' : 'height-0'}`}>
            {todaysTasks.map((task) => (
              <Row
                type='table-row'
                selectedRow={selectedRow}
                handleClick={handleClick}
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

        <div className='future-tasks tasks'>
          <TaskSubtitle
            tasksId={'future'}
            activeTasks={activeTasks}
            setActiveTasks={setActiveTasks}
            subtitle='Предстоящие задачи'
          />
          <div className={`rows ${activeTasks === 'future' ? '' : 'height-0'}`}>
            {futureTasks.map((task) => (
              <Row
                type='table-row'
                selectedRow={selectedRow}
                handleClick={handleClick}
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
