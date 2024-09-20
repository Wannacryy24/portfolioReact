import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import Project from '../Project/Project';
import { ButtonContext } from '../../ButtonContext';
import Contact from '../Contact/Contact';

export default function Home() {
  const [text] = useState('Frontend Web Developer');
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [viewWork, setViewWork] = useState('');
  const { clicked, setClicked, setActiveComponent } = useContext(ButtonContext);

  useEffect(() => {
    if (index < text.length) {
      const intervalId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((currentIndex) => currentIndex + 1);
      }, 200);
      return () => clearTimeout(intervalId);
    }
  }, [index]);

  const handleViewWork = (e) => {
    
    const selectedView = e.target.value;
    console.log(selectedView);
    setViewWork(selectedView);
    setClicked(false);
    setActiveComponent(selectedView);
  };

  return (
    <>
      {viewWork === "project" && <Project/>}
      {viewWork === "contact" && <Contact/>}
      <div className='home-div'>
        <div>
          <div>
            <h1>Mayank</h1>
            <h1>Verma</h1>
            <h3>
              {displayedText}
              <span className='blinking-cursor'>|</span>
            </h3>
          </div>
          <div className='home-btn-div'>
            <button className='view-work-btn' onClick={handleViewWork} value='project'>
              View Work
            </button>
            <button className='contact-me-btn' onClick={handleViewWork} value='contact'>
              Contact Me
            </button>
          </div>
        </div>
        <img src='/background.svg' alt="Background" className='background-circle-image' />
      </div>
    </>
  );
}
