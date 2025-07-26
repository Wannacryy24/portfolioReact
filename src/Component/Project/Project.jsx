import React from 'react'
import './project.css'
import ProjectRender from './ProjectRender'

let projectList = [
  {
    projectTitle: 'CodeCollab',
    projectDetails:
      'Real-time collaborative code editor using Monaco Editor, Socket.IO, and Supabase. Enables multiple users to code together with live cursor sharing, dynamic language support, fullscreen toggle, and session-based collaboration. Integrated Mixpanel to track room joins, code edits, theme changes, and user engagement for better product insights.',
    liveUrl: 'https://code-editor-five-alpha.vercel.app/',
    githubUrl: 'https://github.com/Wannacryy24/CodeCollab',
    imageSrc: '/codeTogether.jpeg',
    technologiesUsed: ['React', 'Monaco Editor', 'Socket.IO', 'Node.js', 'Express', 'Supabase Auth', 'Framer Motion', 'Vite', 'Css3', 'JavaScript', 'Mixpanel (Analytics)',],
  },
  {
    projectTitle: 'WebAudit',
    projectDetails: `A full-stack web performance auditing tool built with Puppeteer and Lighthouse. Users can run one-click audits for any URL, emulate mobile or desktop devices, and view detailed performance, accessibility, best practices, and SEO scores. The tool generates shareable JSON reports with beautifully visualized charts — all without requiring login or signup. Perfect for developers, agencies, and curious website owners who want fast, actionable insights.`,
    liveUrl: 'https://webpilot.onrender.com/',
    githubUrl: 'https://github.com/Wannacryy24/webperformancetest',
    imageSrc: '/pagePilot.png',
    technologiesUsed: ['HTML5', 'Css3' ,'React', 'Node.js', 'Express', 'Puppeteer', 'Lighthouse', 'Chart.js', 'Vite', 'SCSS', 'Render', 'GitHub','CORS'],
  },
  {
    projectTitle: 'Let’s Grow Together',
    projectDetails:
      'A motivational and productivity-focused landing page built with React. Features theme toggling, GSAP animations, and a simulated backend using MirageJS. The project encourages users to build positive habits through a visually engaging and responsive interface.',
    liveUrl: 'https://letsgrowtogether.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/makeStudyBetter.git',
    imageSrc: '/lgt.png',
    technologiesUsed: ['React', 'GSAP', 'ScrollTrigger', 'MirageJS', 'JavaScript', 'Responsive Design', 'Css3', 'HTML5',],
  },
    {
    projectTitle: 'Spotify Cloner',
    projectDetails: 'A responsive music streaming web app replicating core features of Spotify using the Spotify Web API. Includes dynamic playlist browsing, audio playback, artist/album views, and a custom audio player. Built with React and styled using Tailwind CSS. Real-time song updates and interactive UI enhance the user experience.',
    liveUrl: 'https://spotifydummy.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/SpotifyCloner',
    imageSrc: '/spotify.jpeg',
    technologiesUsed: ['React','React Router','Spotify Web API','Context API','JavaScript','HTML5','CSS3','Vite','Fetch API'],
  },
  {
    projectTitle: 'Notes App',
    projectDetails: 'Note-taking app with canvas and quill editor for dynamic, rich text and visual note creation.',
    liveUrl: 'https://notesbymayankverma.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/SuperNotes',
    imageSrc: '/notesSS.png',
    technologiesUsed: ['Html5', 'Css3', 'Javascript', 'Quill Js', 'Canva Js', 'Local Storage', 'Vite'],
  },

  {
    projectTitle: 'Airbnb Clone',
    projectDetails: 'Airbnb with infinite scrolling and showcases detailed property information.',
    liveUrl: 'https://abodehome.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/pgFinder',
    imageSrc: '/air.png',
    technologiesUsed: ['React', 'Html5', 'Css3', 'Javascript', 'MirageJs', 'Infinite Scroll', 'Ajax', 'Json'],
  },
  {
    projectTitle: 'Quiz Maker',
    projectDetails: 'Quiz-Maker app for creating, previewing, and saving quizzes with local storage persistence.',
    liveUrl: 'https://quizzmaker.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/QuizMaker',
    imageSrc: '/Quiz.png',
    technologiesUsed: ['Javascript', 'Html5', 'Css3', 'Local Storage', 'Ajax', 'Json'],
  },
  {
    projectTitle: 'Trivia Quiz',
    projectDetails: 'Quiz app featuring interactive quizzes with a countdown timer and Final Result.',
    liveUrl: 'https://quizappbymayankverma.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/QuizApp',
    imageSrc: '/triviaQuiz.png',
    technologiesUsed: ['Html5', 'Css3', 'Javascript', 'Vite', 'Json'],
  },
  {
    projectTitle: 'JS Portfolio',
    projectDetails: 'JavaScript portfolio with responsiveness and full details using html , css , javascript',
    liveUrl: 'https://mayankvermaportfolio.netlify.app/',
    githubUrl: '',
    imageSrc: '/jsPortfolio.png',
    technologiesUsed: ['Html5', 'Css3', 'Javascript'],
  },
  {
    projectTitle: 'Apple Clone Dummy',
    projectDetails: 'Apple Clone Dummy with responsiveness using html , css , javascript, React, JSON',
    liveUrl: 'https://iclonerreact.netlify.app/',
    githubUrl: 'https://github.com/Wannacryy24/appleCloner',
    imageSrc: '/apple.png',
    technologiesUsed: ['Html5', 'Css3', 'Javascript', 'React'],
  }
];

export default function Project() {
  return (
    <div className='project-div'>
      <p className='studd-p'>Stuff I've build so far</p>
      <div className='project-Details-div'>
        <ProjectRender projectList={projectList} />
      </div>
    </div>
  )
}