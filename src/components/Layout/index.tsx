'use client'
import React, { ReactElement, useState } from 'react';
import Socials from '@/sections/Socials'
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactElement;
  currentActive: string
}

const Layout = ({ children, currentActive }: LayoutProps): ReactElement<LayoutProps> => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (

    <div className="flex flex-col min-h-screen items-center justify-between bg-gradient-to-r from-yellow-600 to-black-800 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" max-w-screen-md mx-auto bg-opacity-80  w-full"
      >
        <Navbar changeSection={handleSectionChange} currentActive={currentActive} />
        <div className="flex flex-col lg:flex-row min-h-96 w-128 shadow-lg rounded-lg mt-16">
          <div id="intro" className={activeSection === 'intro' ? 'w-full' : 'hidden'}>
            {children}
          </div>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className='mt-8'>
          <Socials />
        </div>
      </motion.div>
    </div>
  );
};

export default Layout;
