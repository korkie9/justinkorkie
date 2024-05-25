import { Home, Clipboard, Edit } from 'react-feather';

interface NavProps {
  changeSection: (section: string) => void;
}
const Navbar: React.FC<NavProps> = ({ changeSection }: NavProps) => {

  return (
    <nav className="flex justify-center items-center lg:block lg:w-1/6 bg-gray-800 p-4 text-white">
      <ul className='flex flex-row lg:flex-col w-full h-full justify-center items-center gap-8'>
        <li className="mb-2">
          <a href="#intro" className="block hover:text-blue-400" onClick={() => changeSection('intro')}><Home /></a>
        </li>
        <li className="mb-2">
          <a href="#work-experience" className="block hover:text-blue-400" onClick={() => changeSection('experience')}><Clipboard /></a>
        </li>
        <li className="mb-2">
          <a href="#blogs" className="block hover:text-blue-400" onClick={() => changeSection('blogs')}><Edit /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
