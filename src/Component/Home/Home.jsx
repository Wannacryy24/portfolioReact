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
        <div className='frontend-web-developer'>
          <div>
            <h1 className='mayank'>Mayank</h1>
            <h1 className='verma'>Verma</h1>
            <h3>
              {displayedText}
              <span className='blinking-cursor'>|</span>
            </h3>
          </div>
          <div className='home-btn-div'>
            <div className='home-btn-left-div'>
              <button className='view-work-btn' onClick={handleViewWork} value='project'>
                View Work
              </button>
              <button className='contact-me-btn' onClick={handleViewWork} value='contact'>
                Contact Me
              </button>
            </div>
            <div className='download-resume-div'>
                <a href="/Mayank_Verma_Frontend_Fresher.pdf" target='_blank' rel="noopener noreferrer">
              <button type="button" className="button-download">
                <span className="button__text">Resume</span>
                <span className="button__icon"><svg className="svg" data-name="Layer 2" id="bdd05811-e15d-428c-bb53-8661459f9307" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
              </button>
                </a>
            </div>
            {/* <button className='download-resume-btn-in-homeDiv'>
              Download Resume
            </button> */}
          </div>
        </div>
        <img src='/background.svg' alt="Background" className='background-circle-image  moving-image' />
      </div>
    </>
  );
}