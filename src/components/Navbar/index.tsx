interface NavProps {
  changeSection: (section: string) => void;
}
const Navbar: React.FC<NavProps> = ({ changeSection }: NavProps) => {
  return (
    <nav className="hidden lg:block w-1/6 bg-gray-800 p-4 text-white">
      <ul className='flex flex-col gap-8'>
        <li className="mb-2">
          <a href="#intro" className="block hover:text-blue-400" onClick={() => changeSection('intro')}>Intro</a>
        </li>
        <li className="mb-2">
          <a href="#work-experience" className="block hover:text-blue-400" onClick={() => changeSection('experience')}>Experience</a>
        </li>
        <li className="mb-2">
          <a href="#editors" className="block hover:text-blue-400" onClick={() => changeSection('editors')}>Editors</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
