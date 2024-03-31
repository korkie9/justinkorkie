import { motion } from 'framer-motion';

import { useState } from 'react';

type Project = {
  id: number,
  title: string,
  description: string,
  stack: string[]
}

interface Experience {
  companyName: string,
  projects: Project[]
}
const WorkExperiences: React.FC = () => {
  const workExperiences: Experience[] = [
    {
      companyName: 'BitCube',
      projects: [
        {
          id: 1,
          title: 'BitCube internship',
          description: 'During the height of Covid I started my 3 month internship at Bitcube. During this time, I worked with .Net core (C#) and Angular.',
          stack: ['Angular', '.Net Core']
        },
      ]
    },
    {
      companyName: 'SovTech (Graduate)',
      projects: [
        {
          id: 2,
          title: 'Business Education Platform',
          description: 'For this project, I was in charge of managing bugfixes, updates and implementing new features. It was an online Learning platform that had a mobile app and a web app.',
          stack: ['React Native', 'EJS', 'Express', 'RDS']
        },
        {
          id: 3,
          title: 'Ehailing Security App',
          description: "This app was quite interesting. We've all seen a billion and one e-haling apps but this one was unique in that it was made for a Security company and had a focus on safety.",
          stack: ['Angular', 'Ionic', 'Sailsjs', 'RDS']
        },
      ]
    },
    {
      companyName: 'SovTech (Software Engineer)',
      projects: [
        {
          id: 4,
          title: 'German Car Company',
          description: 'This car company needed an app for users who wanted to know if they qualified for vehicle finance. For this app I was mostly responsible for developing the frontend. It was a progressive web app.',
          stack: ['React', 'Nestjs', 'RDS']
        },
        {
          id: 5,
          title: 'Communication Company',
          description: "This company had a web app for video conferencing. It was specifically for deaf people. I was responsible for feature implementation, setting up testing, and bugfixes.",
          stack: ['React', 'Strapi', 'GraphQl', 'RDS']
        },
        {
          id: 6,
          title: 'Job Market Place',
          description: "This client requested a platform similar to Offerzen but targeted to accountants. It was a progressive web app. For this app I did full feature implementatiion, testing and third-party integration.",
          stack: ['Nextjs', 'Nestjs', 'GraphQl', 'RDS', 'PostgreSql']
        },
      ]
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 7,
          title: 'Clockie',
          description: 'I wanted a chess clock that could be configured to my liking. I developed clockie early in my career',
          stack: ['React Native']
        },
        {
          id: 8,
          title: 'The Game',
          description: `This is a game I play with my friends. Aptly named "The game", it's a charades style game. The setup for this game is somewhat tedious and I wanted a way to automate it.`,
          stack: ['React Native']
        },
        {
          id: 9,
          title: 'Skate or Dice',
          description: "This was the first app I ever launched to the play store. It was a digitized version of the skate dice. The concept is that one would 'roll' the dice and based on how the dice land a skate trick would be produced from the outcome",
          stack: ['React Native']
        },
        {
          id: 1,
          title: 'Paymates',
          description: "One of my more recent projects, this is a mobile app for friends who wish to track how much they owe each other. My friend and partner on this project Luke Stephens is responsible for the immaculate UI you see.",
          stack: ['React Native', '.Net Core (C#)', 'Vuejs', 'Go', 'MySql', 'Azure']
        },
      ]
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const showProject = (projectId: number) => {
    const project = workExperiences.flatMap(exp => exp.projects).find(p => p.id === projectId);
    setSelectedProject(project);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className='flex flex-col items-center p-8'>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
      {workExperiences.map((experience, index) => (
        <div key={index} className='w-full'>
          <h3 className="text-xl font-bold mb-2 text-center mt-4 text-indigo-900">{experience.companyName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.projects.map((project, projectIndex) => (
              <div key={project.id} >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full border rounded-md overflow-hidden shadow-lg transition-transform transform"
                  onClick={() => showProject(project.id)}
                >
                  <div className="p-4 w-full">
                    <h4 className="text-lg mb-1 text-gray-700">{project.title}</h4>
                  </div>
                </motion.div>
                {selectedProject && selectedProject.id === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center overflow-auto z-50"
                  >
                    <div className="max-w-lg mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
                      <h4 className="text-md font-semibold mb-4 text-blue-700">{selectedProject.title}</h4>
                      <p className="text-gray-700">{selectedProject.description}</p>
                      <h4 className='mt-4 text-blue-700'>Stack:</h4>
                      <ul>
                        {selectedProject.stack.map((item: string) => {
                          return (
                            <li className='text-gray-800'>{item}</li>
                          )
                        })}
                      </ul>
                      <button
                        onClick={handleProjectClose}
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperiences;
