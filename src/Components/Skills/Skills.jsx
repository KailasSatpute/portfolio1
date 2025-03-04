import { FaCss3, FaHtml5, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFramer } from "react-icons/cg";

const Experience = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Skills</h1>
      <div className="flex flex-wrap items-center justify-around mt-8">
        <div className="flex flex-wrap md:w-3/5 gap-8 md:p-12 py-10 items-center justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={80} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#00BCFF" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="white" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="white" size={80} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <CgFramer color="white" size={80} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
