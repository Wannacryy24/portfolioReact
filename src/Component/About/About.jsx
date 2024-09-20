import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <motion.div className='about'
      initial={{x:100}}
      animate={{ x:0}}
      exit={{}}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <p>Hello! I’m Mayank Verma,</p>
      <p>I'm a passionate frontend developer with a focus on building engaging user experiences.</p>
      <p>I have have recently completed my Master of Computer Applications (MCA) with score of 8.</p>
      <p>I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects.</p>
      <p> My educational background has equipped me with a solid foundation in programming languages such as html, css, JAvaScript and React.</p>
    </motion.div>
  )
}
