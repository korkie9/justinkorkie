'use client'
import React, { useState } from 'react';
import WorkExperience from '../sections/WorkExperience';
import Navbar from '../components/Navbar';
import Editors from '../sections/Editors';
import Intro from '../sections/Intro';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-md mx-auto bg-white bg-opacity-80 shadow-lg rounded-lg w-full"
      >
        <div className="h-96 flex">
          <Navbar changeSection={handleSectionChange} />
          <div id="intro" className={activeSection === 'intro' ? 'w-full h-full' : 'hidden'}>
            <Intro />
          </div>
          <div id="work-experience" className={activeSection === 'experience' ? 'w-full h-full' : 'hidden'}>
            <WorkExperience />
          </div>
          <div id="editors" className={activeSection === 'editors' ? 'w-full h-full' : 'hidden'}>
            <Editors />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
