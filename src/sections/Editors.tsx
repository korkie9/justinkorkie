import { motion } from 'framer-motion';

import { useState } from 'react';
const Home: React.FC = () => {

  const timelineItems = [
    {
      editor: 'RAD Studio',
      description: 'We all had to start somewhere. For me it was grade 10 IT class. The CAPS education system had just phased out Java and we were taught Delphi. The editor of choice naturally, RAD.'
    },
    {
      editor: 'Sublime',
      description: 'Very close to the beginning of my career I was looking for a lightweight, easy to use editor. Sublime fit this description. Even for Angular projects this worked well. I could not imagine why I would need another editor.'
    },
    {
      editor: 'Visual Studio Code',
      description: 'I quickly learned that VS code was the editor of choice for most professionals. Developed and backed by a major corporation, with an integrated terminal, built-in source control and a bajillion extentions to choose from, why would I ever need another editor?'
    },
    {
      editor: 'Neovim',
      description: "The concept of being addicted to customization may sound strange to most, especially if its using a language that barely makes top 20 most used programming languages. Furthermore, who has time to get used to a text editor that is controlled entirely by keybindings? These thoughts that I and most who still use bloated IDEs and text editors had. This was until I met a man who used nvim. Watching him seamlessly navigate his codebase and make edits with lighting (cachow) speed ignited a flame in me. This was also, in large part, because I only had 8gb of ram. Running multiple process including an app made with electron slowed my machine down alot, even for a machine running Linux. I also just did not have the patience to wait 2 minutes for VS Code to load everytime. Just like VS Code nvim has a bajillion extentions and a massive ecosystem. I was especially hooked when I came to find out that developing .Net apps was a million times better on nvim that even VS Code. Which blew my mind. You'd expect Microsoft would create an editor that would provide good support for a framework they created. There is a dotnet core extention but in my experience it's slow and takes forever for the LSP to recognise the C#. Long Story short, I can't imagine why I would need another text editor."
    },
  ];

  const [selectedEditor, setSelectedEditor] = useState<string | null>(null);

  const handleEditorClick = (description: string) => {
    setSelectedEditor(description);
  };

  const handleClose = () => {
    setSelectedEditor(null);
  };


  return (
    <>
      <div className="text-center mt-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Text Editor Timeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-32 h-24 rounded-md bg-gray-200 shadow-lg"
              onClick={() => handleEditorClick(item.description)}
            >
              <h3 className="text-zinc-800 text-md font-semibold mb-2">{item.editor}</h3>
            </motion.div>
          ))}

        </div>
        {selectedEditor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg z-10">
              <h3 className="text-zinc-800 text-xl font-semibold mb-4">Editor Description</h3>
              <div className="max-h-80 overflow-auto">
                <p className='text-zinc-800'>{selectedEditor}</p>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
