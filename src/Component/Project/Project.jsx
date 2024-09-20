import React from 'react'
import './project.css'
import ProjectRender from './ProjectRender'

let projectList = [{
                    projectTitle:'Airbnb Clone',
                    projectDetails:'Airbnb with infinite scrolling and showcases detailed property information.',
                    liveUrl:'https://abodehome.netlify.app/',
                    githubUrl:'',
                    imageSrc:'/air.png',
                    technologiesUsed:['Html5','Css3','Javascript','React', 'MirageJs'],
                  },
                    {
                    projectTitle:'Quiz Maker',
                    projectDetails:'Quiz-Maker app for creating, previewing, and saving quizzes with local storage persistence.',
                    liveUrl:'https://quizzmaker.netlify.app/',
                    githubUrl:'',
                    imageSrc:'/Quiz.png',
                    technologiesUsed:['Html5','Css3','Javascript'],
                    },
                    {
                      projectTitle:'Trivia Quiz',
                      projectDetails:'Quiz app featuring interactive quizzes with a countdown timer and Final Result.',
                      liveUrl:'https://quizappbymayankverma.netlify.app/',
                      githubUrl:'',
                      imageSrc:'/triviaQuiz.png',
                      technologiesUsed:['Html5','Css3','Javascript'],
                    },
                    {
                      projectTitle:'Javascript Portfolio',
                      projectDetails:'JavaScript portfolio with responsiveness and full details using html , css , javascript',
                      liveUrl:'https://mayankvermaportfolio.netlify.app/',
                      githubUrl:'',
                      imageSrc:'/jsPortfolio.png',
                      technologiesUsed:['Html5','Css3','Javascript'],
                    },{
                      projectTitle:'Notes App',
                      projectDetails:'Note-taking app with canvas and quill editor for dynamic, rich text and visual note creation.',
                      liveUrl:'https://notesbymayankverma.netlify.app/',
                      githubUrl:'',
                      imageSrc:'/notesSS.png',
                      technologiesUsed:['Html5','Css3','Javascript'],
                    },
                  ];

export default function Project() {
  return (
    <div className='project-div'>
      <p className='studd-p'>Stuff I' have build so far</p>
      <div className='project-Details-div'> 
        <ProjectRender projectList={projectList}/>
      </div>
    </div>
  )
}
