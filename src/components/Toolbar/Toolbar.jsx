import React from 'react';

import './Toolbar.css';

export default function Toolbar({ selectedRow, handleDuplicate, handleDelete }) {
  return (
    <div className='toolbar'>
      <button className='toolbar__copy-button' onClick={() => handleDuplicate(selectedRow)}>copy</button>
      <button className='toolbar__delete-button' onClick={() => handleDelete(selectedRow)}>delete</button>

    </div>
  );
}
