import React from 'react';

import './Row.css';

export default function Row() {
  return (
    <div className='row-template'>
      <div className='date'>Дата</div>
      <div className='task-code'>Шифр задачи</div>
      <div className='project-code'>Шифр проекта</div>
      <div className='task'>Задача</div>
      <div className='status'>Статус</div>
      <div className='responsible'>Ответственный</div>
      <div className='shift'>Переназначить</div>
      <div className='priority'>Приоритет</div>
      <div className='comment'>Комментарий</div>
      <div className='time-planned'>План время</div>
      <div className='time-fact'>Факт время</div>
      <div className='start'>Начал</div>
      <div className='finish'>Завершил</div>
    </div>
  );
}
