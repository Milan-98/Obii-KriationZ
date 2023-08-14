"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    console.log("Component mounted"); // This will run when the component mounts
    return () => {
      console.log("Component unmounted"); // This will run when the component unmounts
    };
  }, []);
  return (
    <motion.div
      className="fixed inset-x-0 top-0 h-[4px] origin-left transform bg-ofProgressBar lg:h-[5px]  "
      style={{ scaleX }}
    />
  );
};

export default Progressbar;
