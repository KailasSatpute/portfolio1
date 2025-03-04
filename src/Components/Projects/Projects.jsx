import ProjectCard from "./ProjectCard";
import portfolioPng from "../../assets/portfolio.png";
import blogwebsitePng from "../../assets/blogwebsite.png";

const Projects = () => {
  const openPortfolioDemo = () => {
    window.open("https://kailassatpute.github.io/Basic-Portfolio/");
  };

  const openPortfolioCode = () => {
    window.open("https://github.com/KailasSatpute/Basic-Portfolio");
  };

  const openBlogWebsiteCode = () => {
    window.open("https://github.com/KailasSatpute/Blog-Website");
  };

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          openCode={openBlogWebsiteCode}
          img={blogwebsitePng}
          title="Blog Website"
          main="Created a Blog Website in React JS using Tailwind CSS and also used some component library "
        />
        <ProjectCard
          openDemo={openPortfolioDemo}
          openCode={openPortfolioCode}
          img={portfolioPng}
          title="Modern Portfolio"
          main="Created a modern portfolio design using HTML and Tailwind CSS. This portfolio will look good on desktop"
        />
      </div>
    </div>
  );
};

export default Projects;
