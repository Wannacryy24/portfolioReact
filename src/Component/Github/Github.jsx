import React from 'react';
import { motion } from 'framer-motion';
import './github.css'
export default function Github() {
  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      }
    }
  };
  return (
    <>
      <div className='github-main-div'>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          fill="none"
          stroke="black"
          strokeWidth="2"
          width="200"
          height="100"
          >
        {/* //m likhne ke liye */}
          <motion.path
            d="M 10 80 L 10 20 L 30 40 L 50 20 L 50 80"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            
            />
          <motion.path
            d="M 60 80 L 70 20 L 80 80 M 65 60 L 75 60"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
        
          <motion.path
            d="M 90 20 L 100 50 L 110 20 M 100 50 L 100 80"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            />
          
          <motion.path
            d="M 120 80 L 130 20 L 140 80 M 125 60 L 135 60"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
          
          <motion.path
            d="M 150 80 L 150 20 L 170 80 L 170 20"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
          
          <motion.path
            d="M 180 80 L 180 20 M 180 50 L 190 20 M 180 50 L 190 80"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            />
        </motion.svg>
        <div className='download-btn-div'>
          <span className='left-framgent-of-btn'>
          &lt;button&gt;
          </span>
            <a href="/June2025Resume.pdf" target='_blank'>
              <span className='download-resume'>
              Download Resume
              </span>
            </a>
            <span className='right-framgent-of-btn'>
            &lt;/button&gt;
            </span>
        </div>
      </div>
    </>
  );
}

