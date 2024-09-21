import React, { useEffect, useState } from 'react'
import './contact.css'
import { useScroll } from 'framer-motion'
export default function Contact() {
  return (
    <div className='contact-div'>
      <div className='contact-object-div'>
        <h3>React Out Via Socials</h3>
        <p>
          <span>1</span>
          {`.socials{`}
        </p>
        <p>
          <span>2</span>
          <span className='website-span'>website:</span>
          <a href="https://mayankvermaportfolio.netlify.app/">Portfolio.me</a>
        </p>
        <p>
          <span>3</span>
          <span className='website-span'>email:</span>
          <a href="mailto:mayankverma.dev@gmail.com">mayankverma.dev@gmail.com</a>
        </p>  
        <p>
          <span>4</span>
          <span className='website-span'>github:</span>
          <a href="https://github.com/">mygithub profile</a>
        </p>
        <p>
          <span>5</span>
          <span className='website-span'>linkedin:</span>
          <a href="https://www.linkedin.com/in/mayank-verma-3b8b62318/">Mayank Linkedin</a>
        </p>
        <p>
          <span>6</span>
          <span className='website-span'>Contact_no:</span>  
          <a href="">8868879095</a>
        </p>
        <p>
          
        </p>
        <p>
          <span>7</span>
          {`}`}
        </p>
      </div>
      <img src="/i_build_website.png" alt="" className='i-build-png'/>
    </div>
  )
}
