import React from 'react';
import Image from '../MiniComponent/Image';
import './projectRender.css';

const techColorMap = {
  react: {
    border: '2px solid #61dafb',
    background: '#1e1e1e',
    hover: '#0d2f47',
  },
  vite: {
    border: '2px solid #bf61f3',
    background: '#1e1e1e',
    hover: '#8545ac',
  },
  javascript: {
    border: '2px solid #f7df1e',
    background: '#1e1e1e',
    hover: '#bfae18',
  },
  html5: {
    border: '2px solid #e34c26',
    background: '#1e1e1e',
    hover: '#d9482a',
  },
  css3: {
    border: '2px solid #2965f1',
    background: '#1e1e1e',
    hover: '#204ecf',
  },
  scss: {
    border: '2px solid #cd6799',
    background: '#1e1e1e',
    hover: '#e99abe',
  },
  nodejs: {
    border: '2px solid #3c873a',
    background: '#1e1e1e',
    hover: '#58a14a',
  },
  express: {
    border: '2px solid #91ffe2ff',
    background: '#1e1e1e',
    hover: '#666666',
  },
  socketio: {
    border: '2px solid #f88181ff',
    background: '#1e1e1e',
    hover: '#e1e1e1',
  },
  'supabaseauth': {
    border: '2px solid #3ecf8e',
    background: '#1e1e1e',
    hover: '#2cb174',
  },
  'localstorage': {
    border: '2px solid #c0392b',
    background: '#1e1e1e',
    hover: '#e74c3c',
  },
  json: {
    border: '2px solid #27ae60',
    background: '#1e1e1e',
    hover: '#2ecc71',
  },
  ajax: {
    border: '2px solid #e67e22',
    background: '#1e1e1e',
    hover: '#f39c12',
  },
  'monacoeditor': {
    border: '2px solid #007acc',
    background: '#1e1e1e',
    hover: '#005fa3',
  },
  puppeteer: {
    border: '2px solid #01b0ff',
    background: '#1e1e1e',
    hover: '#037cad',
  },
  lighthouse: {
    border: '2px solid #f25a94',
    background: '#1e1e1e',
    hover: '#ff7cbf',
  },
  'chartjs': {
    border: '2px solid #ff6384',
    background: '#1e1e1e',
    hover: '#ff85a2',
  },
  gsap: {
    border: '2px solid #88ce02',
    background: '#1e1e1e',
    hover: '#b5e04c',
  },
  scrolltrigger: {
    border: '2px solid #4db6ac',
    background: '#1e1e1e',
    hover: '#60d3c3',
  },
  'framermotion': {
    border: '2px solid #cbf',
    background: '#1e1e1e',
    hover: '#e6dfff',
  },
  miragejs: {
    border: '2px solid #7c5cff',
    background: '#1e1e1e',
    hover: '#9d85ff',
  },
  'infinitescroll': {
    border: '2px solid #8e44ad',
    background: '#1e1e1e',
    hover: '#a76cbb',
  },
  'quilljs': {
    border: '2px solid #333',
    background: '#1e1e1e',
    hover: '#dddddd',
  },
  'canvajs': {
    border: '2px solid #f28c28',
    background: '#1e1e1e',
    hover: '#ffab4c',
  },
  'mixpanelanalytics': {
    border: '2px solid #a05aff',
    background: '#1e1e1e',
    hover: '#be8aff',
  },
  // fallback
  default: {
    border: '2px solid gray',
    background: '#333',
    hover: '#555',
  },
};


// Convert tech name to safe CSS key
const slugify = str =>
  str.toLowerCase().replace(/[\s().]/g, '').replace(/-/g, '');

export default function ProjectRender({ projectList }) {
  return (
    <>
      {projectList.map((item, index) => (
        <div className='first-project' key={index}>
          <div className='image-div'>
            <Image src={item.imageSrc} className={'project-image-div'} />
          </div>
          <div className='project-details-inner-bottom-div'>
            <h2>{item.projectTitle}</h2>
            <p>{item.projectDetails}</p>
            <div className='technologies-used-div'>
              <div className='project-details-span-div'>
                <ul>
                  {item.technologiesUsed.map((tech, idx) => {
                    const slug = slugify(tech);
                    const style = techColorMap[slug] || techColorMap.default;

                    return (
                      <li
                        key={idx}
                        className='tech-pill'
                        style={{
                          border: style.border,
                          backgroundColor: style.background,
                        }}
                        onMouseEnter={e =>
                          (e.currentTarget.style.backgroundColor = style.hover)
                        }
                        onMouseLeave={e =>
                          (e.currentTarget.style.backgroundColor = style.background)
                        }
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='project-source-code-div'>
              {item.githubUrl && (
                <a href={item.githubUrl} target='_blank' rel='noopener noreferrer'>
                  Source Code
                </a>
              )}
              {item.liveUrl && (
                <a href={item.liveUrl} target='_blank' rel='noopener noreferrer'>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
