import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
export default function BackgroundImage() {
  return (
    <div 
    style={{
        backgroundImage: `url(/github.svg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    }}
    className='back'
    >backgroundImage
    <AnimatedCursor/></div>
  )
}
