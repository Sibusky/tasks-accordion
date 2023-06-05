import React from 'react';

import './Toolbar.css';

export default function Toolbar({ selectedRow, handleDuplicate }) {
  return (
    <div className='toolbar'>
      <button className='toolbar__button' onClick={() => handleDuplicate(selectedRow)}>copy</button>
    </div>
  );
}
