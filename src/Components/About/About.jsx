import AboutImg from "../../assets/66a485e052fe9.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex md:mt-8 overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-20">
          <img
            className="h-80 md:h-80 mx-auto"
            src={AboutImg}
            alt="About img"
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal italic">
                  Who I am?
                </h1>
                <p className="text-sm md:text-[1rem] leading-tight">
                  I am a passionate Computer Engineering graduate with a strong
                  foundation in web development, programming, and database
                  management. I specialize in React.js, JavaScript, C++, and
                  MySQL, and I enjoy building innovative solutions that solve
                  real-world problems.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal italic">
                  What I Do?
                </h1>
                <p className="text-sm md:text-[1rem] leading-tight">
                  I have experience in developing full-stack applications,
                  including a MERN stack blog platform, a plant disease
                  prediction system using ML, and an online election management
                  system. My expertise lies in creating efficient, scalable, and
                  user-friendly applications with a focus on performance and
                  security.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal italic">
                  Other Interests
                </h1>
                <p className="text-sm md:text-[1rem] leading-tight ">
                  Beyond coding, I love reading, video editing, gaming, and
                  swimming. I am always eager to learn, grow, and contribute to
                  impactful projects. 🚀
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
