import React from 'react';
import { delay, motion } from 'framer-motion';
import './skills.css';

export default function Articles() {
  return (
    <div className='article-div'>
      <motion.div
        initial={{
          opacity: 0, 
          scale: 0.8, 
          y:-350,
          x:-550
        }}
        animate={{
          y:0,
          opacity: 1, 
          scale: 1,
          x:0 
        }}
        transition={{
          duration: .8,
          ease: 'easeInOut',
        }}
      >
        <img src={'/html.png'} className={'jsImage-in-articles'} alt="JavaScript Logo" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y:-500,
          scale: 0.8, 
        }}
        animate={{
          y:0,
          opacity: 1, 
          scale: 1, 
        }}
        transition={{
          duration: .8,
          ease: 'easeInOut',
          delay:0.2
        }}
      >
        <img src={'/css.png'} className={'jsImage-in-articles'} alt="JavaScript Logo" />
      </motion.div>
      <motion.div
        initial={{
          y:-350,
          opacity: 0,
          x:500,
          scale: 0.5, 
        }}
        animate={{
          y:0,
          x:0,
          opacity: 1, 
          scale: 1,
          
        }}
        transition={{
          duration: .8,
          ease: 'easeInOut',
          delay:0.4 
        }}
      >
        <img src={'/javascript.png'} className={'jsImage-in-articles'} alt="JavaScript Logo" />
      </motion.div><motion.div
        initial={{
          opacity: 0,
          x:-500,
          scale: 0.8, 
        }}
        animate={{
          x:0,
          opacity: 1, 
          scale: 1, 
          
        }}
        transition={{
          duration: .8,
          ease: 'easeInOut',
          delay:0.6
        }}
      >
        <img src={'/react.png'} className={'jsImage-in-articles'} alt="JavaScript Logo" />
      </motion.div><motion.div
        initial={{
          opacity: 0,
          y:500,
          // x:-500,
          scale: 0.8, 
        }}
        animate={{
          y:0,
          x:0,
          opacity: 1, 
          scale: 1,
          
        }}
        transition={{
          duration: .8,
          ease: 'easeInOut',
          delay:0.8
        }}
      >
        <img src={'/git.png'} className={'jsImage-in-articles'} alt="JavaScript Logo" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x:500,
          scale: 0.8, 
        }}
        animate={{
          x:0,
          opacity: 1, 
          scale: 1,
          
        }}
        transition={{
          duration: .8,
          ease: 'easeInOut',
          delay:1
        }}
      >
        <img src={'/github.png'} className={'jsImage-in-articles'} alt="JavaScript Logo" />
      </motion.div>
    </div>
  );
}
