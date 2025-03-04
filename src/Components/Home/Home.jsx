import heroPng from "../../assets/hero.png";
import TextChange from "../TextChange";
import { motion } from "framer-motion";

const Home = () => {
  const handleContactme = () => {
    window.open("mailto:kailassatpute80@gmail.com");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1nFiZF_hyMuhZRfweTD5a8YCuyDJW5WM3/view?usp=drive_link";
    link.download = "Kailas_Satpute_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20">
      {/* Left Section */}
      <div className="w-full md:w-2/4 md:pt-10 md:mt-4 flex flex-col  md:space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold leading-normal tracking-tighter">
          Hi, I'm Kailas
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl tracking-tight">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a positive attitude and a growth mindset, I am ready
          to make a meaningful contribution and achieve great things.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button
            onClick={handleContactme}
            className="mt-4 md:mt-6 text-white py-2 px-3 text-xs md:text-[1rem] hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-32 md:w-40 "
          >
            Contact Me
          </button>
          <button
            onClick={handleDownloadResume}
            className="mt-4 md:mt-6 text-white py-2 px-3 text-xs md:text-[1rem] hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#1e673f] w-32 md:w-40"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Right Section - Avatar */}
      <div className="w-full md:w-auto flex justify-center md:justify-end mb-6 md:mb-0 relative">
        {/* Smaller Glow Effect */}
        <motion.div
          className="absolute inset-0 mx-auto w-48 md:w-[28rem] h-48 md:h-[30rem] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse rounded-full blur-xl opacity-40"
          animate={{
            y: [0, -10, 0, 10, 0], // Moves up and down
            x: [0, 5, -5, 5, 0], // Slight side movement
          }}
          transition={{
            duration: 6, // Smooth floating effect
            repeat: Infinity, // Loop animation
            ease: "easeInOut",
          }}
        />

        {/* Image with Floating Effect */}
        <motion.img
          className="w-56 md:w-[30rem] rounded-full relative z-10"
          src={heroPng}
          alt="Avatar"
          animate={{
            y: [0, -8, 0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
