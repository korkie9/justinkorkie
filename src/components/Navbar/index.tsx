import { Home, Clipboard, Edit } from 'react-feather';

interface NavProps {
  changeSection: (section: string) => void;
}
const Navbar: React.FC<NavProps> = ({ changeSection }: NavProps) => {

  return (
    <nav className="rounded-md flex justify-center items-center bg-gray-800 p-4 text-white md:mr-2 lg:mr-2 mb-2 lg:mb-0 md:mb-0 mt-4">
      <ul className='flex flex-row lg:flex-row w-full justify-center items-center gap-8'>
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
