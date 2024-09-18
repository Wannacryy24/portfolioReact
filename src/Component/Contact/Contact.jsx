import React from 'react'
import './contact.css'
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
          website:
          <a href="https://mayankvermaportfolio.netlify.app/">Portfolio.me</a>
        </p>
        <p>
          <span>3</span>
          email:
          <a href="mailto:mayankverma.dev@gmail.com">mayankverma.dev@gmail.com</a>
        </p>  
        <p>
          <span>4</span>
          github:
          <a href="https://github.com/">mygithub profile</a>
        </p>
        <p>
          <span>5</span>
          linkedin
          <a href="https://www.linkedin.com/in/mayank-verma-3b8b62318/">Mayank Linkedin</a>
        </p>
        <p>
        </p>
      </div>
      <img src="/i_build_website.png" alt="" className='i-build-png'/>
    </div>
  )
}
