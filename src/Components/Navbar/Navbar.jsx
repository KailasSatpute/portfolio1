import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative z-50"
    >
      <span className="text-xl font-bold tracking-wide cursor-pointer">
        Portfolio
      </span>

      {/* ✅ Updated Mobile Menu */}
      <ul
        className={`absolute top-16 left-1/2 md:space-x-10 transform -translate-x-1/2 bg-black bg-opacity-80 px-6 py-4 rounded-xl text-center flex-col w-[90%] max-w-xs 
        md:static md:bg-transparent md:flex md:flex-row md:w-auto md:translate-x-0 md:top-0 md:left-0 md:p-0 md:rounded-none z-50 ${
          menu ? "flex" : "hidden md:flex"
        }`}
      >
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <a href={`#${item}`} key={index} onClick={() => openMenu(false)}>
            <li className="text-md transition-all duration-300 p-2 md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#ff6347] via-[#ffeb3b] to-[#00bcd4] hover:animate-pulse">
              {item}
            </li>
          </a>
        ))}
      </ul>

      {/* Menu Icon Toggle */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => openMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => openMenu(true)}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
