import Link from 'next/link';
import { Home, Clipboard, Edit } from 'react-feather';

interface NavProps {
  changeSection: (section: string) => void;
  currentActive: string;
}
const Navbar: React.FC<NavProps> = ({ changeSection, currentActive }: NavProps) => {

  return (
    <nav className="rounded-md flex justify-center items-center bg-gray-800 p-4 text-white md:mr-2 lg:mr-2 mb-2 lg:mb-0 md:mb-0 mt-4">
      <ul className='flex flex-row lg:flex-row w-full justify-center items-center gap-8'>
        <li className="mb-2">
          <Link href="/" className={`block hover:text-blue-400 ${currentActive == "home" ? "text-blue-400" : ""}`} onClick={() => changeSection('intro')}><Home /></Link>
        </li>
        <li className="mb-2">
          <Link href="/experience" className={`${currentActive == "experience" ? "text-blue-400" : ""} block hover:text-blue-400`} onClick={() => changeSection('experience')}><Clipboard /></Link>
        </li>
        <li className="mb-2">
          <Link href="/blogs" className={`${currentActive == "blogs" ? "text-blue-400" : ""} block hover:text-blue-400`} onClick={() => changeSection('blogs')}><Edit /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
