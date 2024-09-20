import React from 'react'
import Image from '../MiniComponent/Image'
import './projectRender.css'

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
                {item.technologiesUsed.map((tech, indextwo) => (
                  <span key={indextwo} className={`${tech}-span`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className='project-source-code-div'>
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
              <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
