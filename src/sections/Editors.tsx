import { motion } from 'framer-motion';

import { useState } from 'react';
const Home: React.FC = () => {

  const timelineItems = [
    {
      year: '2010',
      editor: 'RAD Studio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem vel lectus aliquam, at ultricies elit interdum. Integer consectetur urna sit amet dapibus lacinia.'
    },
    {
      year: '2013',
      editor: 'Sublime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem vel lectus aliquam, at ultricies elit interdum. Integer consectetur urna sit amet dapibus lacinia.'
    },
    {
      year: '2016',
      editor: 'Visual Studio Code',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem vel lectus aliquam, at ultricies elit interdum. Integer consectetur urna sit amet dapibus lacinia.'
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
        <div className="flex items-center justify-center space-x-4">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-32 h-24 rounded-md bg-gray-200 shadow-lg"
              onClick={() => handleEditorClick(item.description)}
            >
              <h3 className="text-md font-semibold mb-2">{item.editor}</h3>
            </motion.div>
          ))}

        </div>
        {selectedEditor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg z-10">
              <h3 className="text-xl font-semibold mb-4">Editor Description</h3>
              <p>{selectedEditor}</p>
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
