import React from 'react';

import './Toolbar.css';

export default function Toolbar({
  selectedRow,
  handleDuplicate,
  handleDelete,
}) {
  return (
    <div className='toolbar'>
      <ul className='toolbar__container'>
        <li className='toolbar__item'>
          <button
            className='toolbar__copy-button button'
            onClick={() => handleDuplicate(selectedRow)}
          ></button>
        </li>
        <li className='toolbar__item'>
          <button
            className='toolbar__delete-button button'
            onClick={() => handleDelete(selectedRow)}
          >
            🗑️
          </button>
        </li>
      </ul>
    </div>
  );
}
