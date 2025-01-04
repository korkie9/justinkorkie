import { motion } from 'framer-motion';

import { useState } from 'react';

type Project = {
  id: number,
  title: string,
  description: string,
  links: Link[]
}

type Link = {
  link: string,
  title: string
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
          links: []
        },
      ]
    },
    {
      companyName: 'SovTech (Graduate)',
      projects: [
        {
          id: 2,
          title: 'Mr Mak',
          description: 'For this project, I was in charge of managing bugfixes, updates and implementing new features. It was an online Learning platform that had a mobile app and a web app.',
          links: [{ link: "https://www.mr-mak.com/", title: "Mr Mak" }]
        },
        {
          id: 3,
          title: 'Secure Express',
          description: "This app was quite interesting. We've all seen a billion and one e-haling apps but this one was unique in that it was made for a Security company and had a focus on safety. I was in charge of full mobile frontend design implementation.",
          links: [{ title: "Play Store", link: "https://play.google.com/store/apps/details?id=za.co.secureexpress.passenger&hl=en_ZA&pli=1" }, {
            link: "https://apps.apple.com/za/app/secure-express/id1554428944", title: "Apple App Store"
          },
          ]
        },
      ]
    },
    {
      companyName: 'SovTech (Software Engineer)',
      projects: [
        {
          id: 4,
          title: 'Volks Wagen Financial Services',
          description: 'VWFS needed an app for users who wanted to know if they qualified for vehicle finance. For this app I was mostly responsible for developing the frontend of the progressive web app.',
          links: [{ link: "https://quickapp.co.za/", title: "Website" }]
        },
        {
          id: 5,
          title: 'Virecom',
          description: "This company had a web app for video conferencing. It was specifically for deaf people. I was responsible for feature implementation, setting up testing, and bugfixes.",
          links: [{ title: "Website", link: "https://www.virecom.co.za/" }]
        },
        {
          id: 6,
          title: 'Chartered Solutions',
          description: "Chartered Solutions requested a platform similar to Offerzen but targeted to accountants. It was a progressive web app. For this app I did full feature implementatiion, testing and third-party integration.",
          links: [{ title: "Company Website", link: "https://chartered-solutions.co.uk/" }]
        },
      ]
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 7,
          title: 'Skate or Dice',
          description: "This was the first app I ever launched to the play store. It was a digitized version of the skate dice. The concept is that one would 'roll' the dice and based on how the dice land a skate trick would be produced from the outcome. It has since been taken down but as my first Play Store app, it is something I am proud of.",
          links: []
        },
      ]
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 8,
          title: 'Open source Projects',
          description: "I have many hobby projects, some of which are open source. I find it fulfilling to know things I create may benifit others even if in small ways. You can find them on my public Github profile.",
          links: [{ title: "Github profile", link: "https://github.com/korkie9" }, { link: "https://crates.io/crates/zmove", title: "Crate Package" }, { link: "https://crates.io/crates/zcopy", title: "Crate Package" }]
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
          {experience.projects.map((project, projectIndex) => (
            <div key={project.id} >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-12 m-1 border rounded-md shadow-lg transition-transform transform"
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
                    <ul className="flex mt-4 flex-col">
                      {selectedProject.links.map((item: Link) => {
                        return (
                          <a key={item.title} href={item.link} className=" text-blue-700">{item.title}</a>
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
      ))}
    </div>
  );
};

export default WorkExperiences;
