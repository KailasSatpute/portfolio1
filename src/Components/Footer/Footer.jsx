import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row justify-center md:justify-around items-center 
                 bg-[#ffffff1a] backdrop-blur-md text-white p-8 md:p-12 
                 rounded-2xl border-t border-white/10 shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          Get in Touch
        </h1>
        <h3 className="text-md md:text-xl font-light opacity-80">
          Feel free to reach out anytime!
        </h3>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex gap-4 md:gap-6 mt-6 md:mt-0"
      >
        {[
          { icon: MdOutlineEmail, link: "mailto:kailassatpute80@gmail.com" },
          {
            icon: CiLinkedin,
            link: "https://www.linkedin.com/in/kailassatpute/",
          },
          { icon: FaGithub, link: "https://github.com/KailasSatpute" },
        ].map((item, index) => (
          <li
            key={index}
            className="transition-transform transform hover:scale-125"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon
                size={40}
                className="text-white hover:text-[#4A90E2] transition-colors duration-300"
              />
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Footer;
