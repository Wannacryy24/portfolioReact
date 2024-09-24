import React, { useContext, useState } from 'react'
import './Explorer.css'
import Image from '../MiniComponent/Image'
import { useNavigate } from 'react-router-dom';
import { ButtonContext } from '../../ButtonContext';
export default function Explorer() {
    const [showPortfolio , setShowPortfolio] = useState(false);
    const navigate = useNavigate();
    const { activeComponent , setActiveComponent } = useContext(ButtonContext);

    const handlePortfolio = () => {
        setShowPortfolio(!showPortfolio);
    }

    const handleClickbtn = (e) => {
        var selectedComponent = e.currentTarget.getAttribute('data-value');
        setActiveComponent(selectedComponent);
        navigate(selectedComponent);
    }
  return (
    <>
    <div className='explorer-Div'>
        <p className='explorer'>EXPLORER</p>
        <div className='explorer-portfolio-div' onClick={handlePortfolio}>
            {showPortfolio 
                ? <Image src={'/rightArrow.svg'} className='down-Arrow-svg-Image'/>
                : <Image src={'/down.svg'} className='down-Arrow-svg-Image'/>
            }
            <p className='portfolio'>PORTFOLIO</p>
        </div>
        {
            showPortfolio ? '' :
            <div className='explorer-files'>
                    
                <div className={activeComponent=== 'home' ? 'explorer-home-div-Active':'explorer-home-div'} onClick={handleClickbtn} data-value='home'>
                    <Image src={'/react.svg'} className={'explorer-home-img'}/>
                    <p>Home.jsx</p>
                </div>


                <div className={activeComponent === 'about' ? 'explorer-home-div-Active':'explorer-home-div'} onClick={handleClickbtn} data-value='about'>
                    <Image src={'/html_icon.svg'} className={'explorer-html-img'}/>
                    <p>About.html</p>
                </div>


                <div className={activeComponent === 'contact' ? 'explorer-home-div-Active':'explorer-home-div'} onClick={handleClickbtn} data-value='contact'>
                    <Image src={'/css_icon.svg'} className={'explorer-contact-img'}/>
                    <p>Contact.css</p>
                </div>


                <div className={activeComponent === 'project' ? 'explorer-home-div-Active':'explorer-home-div'} onClick={handleClickbtn} data-value='project'>
                    <Image src={'/js_icon.svg'} className={'explorer-project-img'}/>
                    <p>Project.js</p>
                </div>


                <div className={activeComponent === 'articles' ? 'explorer-home-div-Active':'explorer-home-div'} onClick={handleClickbtn} data-value='articles'>
                    <Image src={'/json_icon.svg'} className={'explorer-articles-img'}/>
                    <p>Skills.json</p>
                </div>


                <div className={activeComponent === 'github' ? 'explorer-home-div-Active':'explorer-home-div'} onClick={handleClickbtn} data-value='github'>
                    <Image src={'/markdown_icon.svg'} className={'explorer-github-img'}/>
                    <p>Github.md</p>
                </div>
            </div>
        }
    </div>
    </>
  )
}
