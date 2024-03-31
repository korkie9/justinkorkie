import { DiAngularSimple, DiDotnet } from "react-icons/di";
import { FaNode, FaReact, FaAws, FaGithub } from "react-icons/fa";
import { SiNeovim, SiTypescript, SiNestjs, SiMysql, SiExpress, SiLua } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { FaGolang } from "react-icons/fa6";

const Intro: React.FC = () => {

  return (
    <>
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold mt-4 text-gray-800">Justin Korkie</h1>
        <p className="text-lg text-gray-600">Software Engineer</p>
      </div>
      <div className="text-center mb-8 p-8">
        <p className="text-lg text-gray-800 mb-2">
          Hi, I&apos;m Justin Korkie, a passionate software engineer with a focus on building
          robust and scalable applications. With 5 years of experience,
          I&apos;ve worked with various technologies on a range of projects, always striving for excellence in both code quality and user experience.
        </p>
        <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-8 gap-4 text-gray-600 items-center justify-center p-4 pt-8 lg:text-2xl text-9xl">
          <div className="text-2xl">
            <DiAngularSimple />
          </div>
          <div className="text-2xl">
            <FaNode />
          </div>
          <div className="text-2xl">
            <SiTypescript />
          </div>
          <div className="text-2xl">
            <FaReact />
          </div>
          <div className="text-2xl">
            <SiNestjs />
          </div>
          <div className="text-2xl">
            <DiDotnet />
          </div>
          <div className="text-2xl">
            <SiMysql />
          </div>
          <div className="text-2xl">
            <FcLinux />
          </div>
          <div className="text-2xl">
            <BiLogoPostgresql />
          </div>
          <div className="text-2xl">
            <FaGolang />
          </div>
          <div className="text-2xl">
            <FaAws />
          </div>
          <div className="text-2xl">
            <SiExpress />
          </div>
          <div className="text-2xl">
            <FaGithub />
          </div>
          <div className="text-2xl">
            <SiLua />
          </div>
          <div className="text-2xl">
            <SiNeovim />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
