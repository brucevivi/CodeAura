import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

// Helper to chunk the array into groups of 4
const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => 
    (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
};

const Services = () => {
  const serviceChunks = chunkArray(services, 4);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What we build</p>
        <h2 className={styles.sectionHeadText}>We build</h2>
      </motion.div>
      <div className="mt-20 flex flex-col gap-10">
        {serviceChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className={`flex flex-wrap gap-10 ${chunk.length < 4 ? 'justify-center' : ''}`}
          >
            {chunk.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={chunkIndex * 4 + index}
                {...service}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

const WrappedServices = SectionWrapper(Services, 'Services');

export default WrappedServices;