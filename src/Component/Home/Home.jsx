import React from 'react'
import './home.css'
export default function Home() {
  return (
    <div className='home-div'>
      <div>
        <div>
          <h1>Mayank </h1>
          <h1>Verma</h1>
          <h3>Frontend Web Developer</h3>
        </div>
        <div className='home-btn-div'>
          <button className='view-work-btn'>View Work</button>
          <button className='contact-me-btn'>Contact Me</button>
        </div>
      </div>
      <img src={'/background.svg'} alt="" className='background-circle-image'/>
    </div>
  )
}
