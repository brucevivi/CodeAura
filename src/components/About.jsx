import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

// Motion Variants
const fadeIn = (direction = 'up', duration = 0.75, delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration,
      delay,
      type: 'spring',
    },
  },
});

const About = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            About MadAboutCoding
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Curious minds. Clean builds. Code that feels right.
          </p>
        </motion.div>

        {/* Grid: Why Us + Mission */}
<div className="grid lg:grid-cols-2 gap-6 items-stretch">
  {/* Shared card style */}
  {[
    {
      title: '🚀 Who We Are',
      content: (
        <>
          <p className="text-base leading-relaxed text-secondary mb-4">
            At MadAboutCoding, we believe great software isn’t just built with code — it’s built with curiosity, patience, and care.
          </p>
          <p className="text-base leading-relaxed text-secondary">
            We’re a small team of engineers who love turning ideas into reliable, well-crafted digital products. Our strength lies in how quickly we understand problems and adapt to new technologies. If it’s new today, we’ll learn it by tomorrow — that’s our rhythm.
          </p>
        </>
      ),
      fade: 'left',
    },
    {
      title: '💡 Why Us',
      content: (
        <>
          <p className="text-base leading-relaxed text-secondary mb-4">
            For us, MadAboutCoding isn’t just a name — it’s a mindset. We think, learn, and build with relentless curiosity and real craftsmanship.
          </p>
          <ul className="space-y-2 list-inside text-secondary">
            {[
              '💡 Curiosity Drives Us',
              '🎨 Where Design Meets Engineering',
              '⏱️ Precision Meets Speed',
              '🤝 Personal Collaboration',
              '🧩 Built to Last',
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </>
      ),
      fade: 'right',
    },
  ].map(({ title, content, fade }, i) => (
    <motion.div
      key={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn(fade, 0.75, 0.2)}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[420px]"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className="flex flex-col justify-between h-full">{content}</div>
    </motion.div>
  ))}
</div>


        {/* Motto / Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn('up', 0.8, 0.6)}
          className="mt-20 text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/30 relative overflow-hidden hover:from-purple-500/15 hover:to-pink-500/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                ⚡ MadAboutCoding — curious minds, clean builds, and code that feels right.
              </motion.h3>
              <motion.p
                className="text-xl leading-relaxed max-w-3xl mx-auto text-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                💬 “We love what we build — and we build what we’d love to use.”
              </motion.p>

              {/* Decorative Dots */}
              <motion.div
                className="flex justify-center items-center mt-8 space-x-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-200"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
