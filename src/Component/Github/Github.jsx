import React from 'react';
import { motion } from 'framer-motion';

export default function Github() {
  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2, // Duration of the animation
        ease: "easeInOut",
      }
    }
  };

  return (
    <>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="black"
      strokeWidth="3"
      width="200"
      height="200"
      >
      {/* Path for drawing the letter "M" */}
      <motion.path
        d="M 10 80 L 10 20 L 50 60 L 90 20 L 90 80"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
      <div>
        &lt;button&gt;
          <a href="">
            Download Resume
          </a>
          &lt;/button&gt;
      </div>
        </>
  );
}