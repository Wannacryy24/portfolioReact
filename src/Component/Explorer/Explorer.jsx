import React from 'react'
import './Explorer.css'
import Image from '../MiniComponent/Image'
export default function Explorer() {
  return (
    <>
    <div className='explorer-Div'>
        <p className='explorer'>EXPLORER</p>
       <div className='explorer-portfolio-div'>
        <Image src={'/down.svg'} className='down-Arrow-svg-Image'/>
            <p className='portfolio'>PORTFOLIO</p>
       </div>
       <div className='explorer-files'>
            <div className='explorer-home-div'>
                <Image src={'/react.svg'} className={'explorer-home-img'}/>
                <p>Home.jsx</p>
            </div>
            <div>
                <Image src={'/html_icon.svg'} className={'explorer-html-img'}/>
                <p>about.html</p>
            </div>
            <div>
                <Image src={'/css_icon.svg'} className={'explorer-contact-img'}/>
                <p>contact.css</p>
            </div>
            <div>
                <Image src={'/js_icon.svg'} className={'explorer-project-img'}/>
                <p>project.js</p>
            </div>
            <div>
                <Image src={'/json_icon.svg'} className={'explorer-articles-img'}/>
                <p>skills.json</p>
            </div>
            <div>
                <Image src={'/markdown_icon.svg'} className={'explorer-github-img'}/>
                <p>github.md</p>
            </div>
       </div>
    </div>
    
    </>
  )
}
