"use client"
import { motion, useScroll,useSpring } from 'framer-motion';
import { useEffect } from 'react';

const Progressbar = () => {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    console.log("Component mounted"); // This will run when the component mounts
    return () => {
      console.log("Component unmounted"); // This will run when the component unmounts
    };
  }, []);
  return (

    <div className='h-[5px] bg-red-900   ' >
     <motion.div className="progress-bar bg-ofProgressBar " style={{ scaleX}} />
    </div>
  );
};

export default Progressbar;