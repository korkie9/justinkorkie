import { motion } from 'framer-motion';

import { useState } from 'react';
const WorkExperiences: React.FC = () => {
  const workExperiences = [
    {
      companyName: 'Company A',
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Description of project 1 for Company A.',
          imageUrl: 'https://via.placeholder.com/300',
          url: 'https://example.com/project1'
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Description of project 2 for Company A.',
          imageUrl: 'https://via.placeholder.com/300',
          url: 'https://example.com/project2'
        },
      ]
    },
    {
      companyName: 'Company B',
      projects: [
        {
          id: 3,
          title: 'Project 3',
          description: 'Description of project 3 for Company B.',
          imageUrl: 'https://via.placeholder.com/300',
          url: 'https://example.com/project3'
        },
        {
          id: 4,
          title: 'Project 4',
          description: 'Description of project 4 for Company B.',
          imageUrl: 'https://via.placeholder.com/300',
          url: 'https://example.com/project4'
        },
      ]
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleClick = (projectId: number) => {
    const project = workExperiences.flatMap(exp => exp.projects).find(p => p.id === projectId);
    setSelectedProject(project);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className='flex flex-col items-center'>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>
      {workExperiences.map((experience, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{experience.companyName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.projects.map((project, projectIndex) => (
              <div key={project.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="border rounded-md overflow-hidden shadow-lg transition-transform transform"
                  onClick={() => handleClick(project.id)}
                >
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                  </div>
                </motion.div>
                {selectedProject && selectedProject.id === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center"
                  >
                    <div className="max-w-lg mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">{selectedProject.title}</h4>
                      <p className="text-gray-700">{selectedProject.description}</p>
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
