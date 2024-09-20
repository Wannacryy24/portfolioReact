import React, { useEffect, useState } from 'react'
import './home.css'
export default function Home() {
  const [text] = useState('Frontend Web Developer');
  const [displayedText , setText]  = useState('');
  const [ index , setIndex] = useState(0);
  useEffect(()=>{
    if( index <text.length){
      const intervalid = setTimeout(()=>{
        setText(preText => preText + text[index]);
        setIndex(currentIndex => currentIndex+1);
      },200);
      return ()=> clearTimeout(intervalid);
    }
  } , [index,text]); 
  return (
    <div className='home-div'>
      <div>
        <div>
          <h1>Mayank </h1>
          <h1>Verma</h1>
          <h3>
             {displayedText}
            <span className='blinking-cursor'>|</span>
          </h3>
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
