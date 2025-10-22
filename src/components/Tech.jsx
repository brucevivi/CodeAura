import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Lottie from "lottie-react";

// Animation variants
const iconVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      delay,
      duration: 0.8,
    },
  },
});

const TechIcon = ({ tech, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={iconVariant(index * 0.1)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.15 }}
      className="w-28 h-28 cursor-pointer rounded-full shadow-xl bg-gradient-to-br from-[#1f1f1f] to-[#3c3c3c] p-[2px] hover:shadow-pink-500/50 transition-all duration-300 ease-in-out"
    >
      <div className="bg-black rounded-full w-full h-full flex items-center justify-center p-2">
        {tech.lottie ? (
          <Lottie animationData={tech.lottie} loop autoplay />
        ) : (
          <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain" />
        )}
      </div>
    </motion.div>
  );
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((tech, index) => (
      <TechIcon key={tech.name} tech={tech} index={index} />
    ))}
  </div>
);

export default SectionWrapper(Tech, "");