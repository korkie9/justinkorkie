import { motion } from 'framer-motion';
import { Iceberg, Nova_Round } from 'next/font/google'

const iceberg = Iceberg({ subsets: ['latin'], weight: "400" })

const novaRound = Nova_Round({ subsets: ['latin'], weight: "400" })


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
  projects: Project[],
  isProfessional: boolean
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
          links: [],
        },
      ],
      isProfessional: true
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
      ],
      isProfessional: true
    },
    {
      companyName: 'SovTech (Software Engineer)',
      projects: [
        {
          id: 4,
          title: 'Volks Wagen',
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
      ],
      isProfessional: true
    },
    {
      companyName: "MiDO academy (Cyber X)",
      projects: [
        {
          id: 7,
          title: 'MiDO academy (Cyber X)',
          description: `During 2024 I wanted to explore the world of Cyber Security. I like breaking things down as
              much as I like building them up. Cyber security I found to be the perfect missing puzzle piece for this.
              It has allowed me to explore the other side of software and systems while making me an indespensible asset 
              to any team I join.`,
          links: []
        },
      ],
      isProfessional: true
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 8,
          title: 'Open source Projects',
          description: "I have many hobby projects, some of which are open source. I find it fulfilling to know things I create may benifit others even if in small ways. You can find them on my public Github profile.",
          links: [{ title: "Github profile", link: "https://github.com/korkie9" }, { link: "https://crates.io/users/korkie9", title: "Crates" }]
        },
      ],
      isProfessional: false
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 9,
          title: 'Skate or Dice',
          description: "This was the first app I ever launched to the play store. It was a digitized version of the skate dice. The concept is that one would 'roll' the dice and based on how the dice land a skate trick would be produced from the outcome. It has since been taken down but as my first Play Store app, it is something I am proud of.",
          links: []
        },
      ],
      isProfessional: false
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 10,
          title: 'Zmove',
          description: `I am very much a terminal hermit so programs like  really are a game changer for me since it 
                        lets me move into deeply nested directories instantly without having to type long strings or change directory and ls 
                        a bunch of times. I was however getting annoyed whenever I made a download and had to move the file, forcing me to type 
                        the mv command and then a long string as the path. This app utilises Zoxide to move files or folders instantly to any 
                        path you've already visisted. You cand find a more indepth explanation from the links below.`,
          links: [{ title: "Github", link: "https://github.com/korkie9/zmove" }, { title: "Crates.io", link: "https://crates.io/crates/zmove" }]
        },
      ],
      isProfessional: false
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 11,
          title: 'Zcopy',
          description: "I devloped this project alongsside zmove. It follows the same concept as zmove except with copying files to a path the user has visited before without long string inputs. Documentation can be found in links below.",
          links: [{ title: "Github", link: "https://github.com/korkie9/zcopy" }, { title: "Crates.io", link: "https://crates.io/crates/zcopy" }]
        },
      ],
      isProfessional: false
    },
    {
      companyName: 'Personal',
      projects: [
        {
          id: 12,
          title: 'Blogging with Obsidian',
          description: `I love using Obsidian for note taking and it got me thinking, "This would be the perfect tool for someone who wished to write a blog 
                        but didn't want to log onto a website everytime they wanted to write one. Could we find a way for them to write a blog and publish 
                        it without having to leave Obsidian?" To answer this question, I set up a personal website and blog for a friend of mine. Funny 
                        enough, you can read more about it in the blog below.`,
          links: [{ title: "Personal website / Blog", link: "https://zaakirah.vercel.app/blog/A%20better%20way%20to%20blog" }]
        },
      ],
      isProfessional: false
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [professional, setProfessional] = useState<any>(true);

  const showProject = (projectId: number) => {
    const project = workExperiences.flatMap(exp => exp.projects).find(p => p.id === projectId);
    setSelectedProject(project);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className='flex flex-col items-center p-8'>

      <h2 className={`text-2xl font-bold mb-4 text-gray-900 ${novaRound.className}`}>Work Experience</h2>
      {/* Tab Section */}

      <nav className="rounded-md flex justify-center items-center bg-gray-800 p-2 text-white pl-4 pr-4">
        <ul className='flex flex-row lg:flex-row w-full justify-center items-center h-full' >
          <li className="flex-1 mb-2 w-full border-r-2 pr-8 justify-center" >
            <button className={`${professional ? "text-blue-400" : ""} hover:text-blue-400`} onClick={() => { setProfessional(true) }}>Professional</button>
          </li>
          <li className="flex-1 mb-2 w-full border-l-1 justify-center pl-10 pr-2">
            <button className={`${!professional ? "text-blue-400" : ""} hover:text-blue-400`} onClick={() => { setProfessional(false) }}>Personal</button>
          </li>
        </ul>
      </nav>
      {/* Tab Section */}
      <div className={`w-full bg-black`}>


      </div>
      {workExperiences.filter(x => x.isProfessional == professional).map((experience, index) => (
        <div key={index} className='w-full'>
          {experience.projects.map((project, projectIndex) => (
            <div key={project.id} >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-12 m-1 rounded-md shadow-md transition-transform transform"
                onClick={() => showProject(project.id)}
              >
                <div className="p-4 w-full">
                  <h4 className={` ${iceberg.className} text-lg mb-1 text-gray-100`}>{project.title}</h4>
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
                    <h4 className={` ${novaRound.className} text-md font-semibold mb-4 text-yellow-800`}>{selectedProject.title}</h4>
                    <p className={`${iceberg.className} text-gray-700`}>{selectedProject.description}</p>
                    <ul className="flex mt-4 flex-col">
                      {selectedProject.links.map((item: Link) => {
                        return (
                          <a key={item.title} href={item.link} className={` text-yellow-600 underline ${iceberg.className}`}>{item.title}</a>
                        )
                      })}
                    </ul>
                    <button
                      onClick={handleProjectClose}
                      className={`mt-4 bg-yellow-900 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300 ${iceberg.className}`}
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
