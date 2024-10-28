import React from 'react'
import './Secondary_Nav.css';

export default function SecondaryNav() {
  return (
    <>
        <header>
          <nav>
            <div className="main-logo">
              iNOTES
            </div>
            <span className='li'>Home</span>
            <span className='li'>Notes</span>
            <span className='li'>About</span>
            <span className='mr-auto li'>Contact Me</span>
            <button className='btn btn-dark lastspan'>Sign Up</button>
          </nav>
        </header>
    </>
  )
}
