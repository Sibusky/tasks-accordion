import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright text'>Алексей Смирнов</p>
        <ul className='footer__links'>
          <li className='footer__link'>
            <a
              className='link button'
              href='https://t.me/sibusky'
              target='_blank'
              rel='noreferrer'
            >
              <div className='telegram-img'></div>
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='link button'
              href='https://github.com/Sibusky'
              target='_blank'
              rel='noreferrer'
            >
              <div className='github-img'></div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
