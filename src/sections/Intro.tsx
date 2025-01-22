import { DiAngularSimple, DiDotnet } from "react-icons/di";
import { FaNode, FaReact, FaAws, FaGithub } from "react-icons/fa";
import { SiNeovim, SiTypescript, SiNestjs, SiMysql, SiExpress, SiLua } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { FaGolang } from "react-icons/fa6";
import { Iceberg, Nova_Round, Rubik_Glitch } from 'next/font/google'

const rubikGlitch = Rubik_Glitch({ subsets: ['latin'], weight: "400" })
const iceberg = Iceberg({ subsets: ['latin'], weight: "400" })
const novaRound = Nova_Round({ subsets: ['latin'], weight: "400" })

const Intro: React.FC = () => {

  return (
    <>
      <div className="text-center mb-2">
        <h1 className={` ${rubikGlitch.className} text-5xl font-bold mt-4 text-gray-900`}>Justin Korkie</h1>
        <p className={`text-2xl text-gray-800 ${novaRound.className}`}>Software Engineer</p>
      </div>
      <div className="text-center mb-8 p-8">
        <p className={`text-xl text-gray-300 mb-2 ${iceberg.className}`}>
          Hi, I&apos;m Justin Korkie, a passionate software engineer with a focus on building
          robust and scalable applications. With 5 years of experience,
          I&apos;ve worked with various technologies on a range of projects, always striving for excellence in both code quality and user experience.
        </p>
        <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-8 gap-4 text-yellow-200 items-center justify-center p-4 pt-8 lg:text-2xl text-9xl">
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
