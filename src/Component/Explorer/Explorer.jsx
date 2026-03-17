import { useContext, useState, useRef, useEffect } from 'react';
import './Explorer.css';
import Image from '../MiniComponent/Image';
import { useNavigate } from 'react-router-dom';
import { ButtonContext } from '../../ButtonContext';
import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons';

export default function Explorer() {
  const [showPortfolio, setShowPortfolio] = useState(true);
  const navigate = useNavigate();
  const { activeComponent, setActiveComponent } = useContext(ButtonContext);
  const filesRef = useRef(null);

  const handlePortfolio = () => {
    setShowPortfolio(prev => !prev);
  };

  const handleClickbtn = (e) => {
    const selectedComponent = e.currentTarget.getAttribute('data-value');
    setActiveComponent(selectedComponent);
    navigate(selectedComponent);
  };

  useEffect(() => {
  const el = filesRef.current;
  if (!el) return;

  if (showPortfolio) {
    // ✅ OPEN
    el.style.height = el.scrollHeight + "px";

    const timer = setTimeout(() => {
      el.style.height = "auto";
    }, 250);

    return () => clearTimeout(timer);
  } else {
    // ✅ CLOSE
    el.style.height = el.scrollHeight + "px";

    requestAnimationFrame(() => {
      el.style.height = "0px";
    });
  }
}, [showPortfolio]);

  // ✅ INITIAL OPEN STATE
  useEffect(() => {
    const el = filesRef.current;
    if (el) {
      el.style.height = el.scrollHeight + "px";
    }
  }, []);

  
  return (
    <div className='explorer-Div'>
      <div className='explorer'>EXPLORER</div>
      <div className='explorer-portfolio-div' onClick={handlePortfolio}>
        <Image
          src={'/down.svg'}
          className={`down-Arrow-svg-Image ${showPortfolio ? 'rotate' : ''}`}
        />
        <p className='portfolio'>
          PORTFOLIO 
          <FileAddOutlined style={{ fontSize: "1rem" }} /> 
          <FolderAddOutlined style={{ fontSize: "1rem" }} />
        </p>
      </div>

      <div ref={filesRef} className="explorer-files">
        
        <div className={activeComponent === 'home' ? 'explorer-home-div-Active' : 'explorer-home-div'} onClick={handleClickbtn} data-value='home'>
          <Image src={'/react.svg'} className='explorer-home-img' />
          <p>Home.jsx</p>
        </div>

        <div className={activeComponent === 'about' ? 'explorer-home-div-Active' : 'explorer-home-div'} onClick={handleClickbtn} data-value='about'>
          <Image src={'/html_icon.svg'} className='explorer-html-img' />
          <p>About.html</p>
        </div>

        <div className={activeComponent === 'contact' ? 'explorer-home-div-Active' : 'explorer-home-div'} onClick={handleClickbtn} data-value='contact'>
          <Image src={'/css_icon.svg'} className='explorer-contact-img' />
          <p>Contact.css</p>
        </div>

        <div className={activeComponent === 'project' ? 'explorer-home-div-Active' : 'explorer-home-div'} onClick={handleClickbtn} data-value='project'>
          <Image src={'/js_icon.svg'} className='explorer-project-img' />
          <p>Project.js</p>
        </div>

        <div className={activeComponent === 'articles' ? 'explorer-home-div-Active' : 'explorer-home-div'} onClick={handleClickbtn} data-value='articles'>
          <Image src={'/json_icon.svg'} className='explorer-articles-img' />
          <p>Skills.json</p>
        </div>

        <div className={activeComponent === 'github' ? 'explorer-home-div-Active' : 'explorer-home-div'} onClick={handleClickbtn} data-value='github'>
          <Image src={'/markdown_icon.svg'} className='explorer-github-img' />
          <p>Github.md</p>
        </div>

      </div>
    </div>
  );
}