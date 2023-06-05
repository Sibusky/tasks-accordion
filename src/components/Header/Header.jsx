import React from 'react'

import './Header.css'

export default function Header() {
  return (
    <header className='header section'>
      <div className='header__container section__container'>
        <div className='header__project'>
          <div className='header__project-image'></div>
          <h2 className='header__project-title text h2'>Проект: задачи в виде аккордеона</h2>
        </div>
        <div className='header__project-user'>
          <div className='header__project-user-ring'></div>
          <div className='header__project-user-avatar'></div>
          <div className='header__project-user-bio'>
            <p className='header__project-user-name text'>Гагарин Ю.А.
            </p>
            <p className='header__project-user-role text'>Космонавт</p>
          </div>
        </div>
      </div>
    </header>
  )
}
