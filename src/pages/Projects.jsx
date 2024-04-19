import { Link } from "react-router-dom";
import { projects } from "../constants";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex-col gap-3 text-slate-500">
        <p>
          These project are a straightforward application of my current
          understanding of modern web and game development principles. Moving
          forward, my focus is on deepening my proficiency with Unreal Engine 5,
          aiming to broaden my knowledge in game mechanics, game design,
          storytelling and digital art, in order to create more immersive and
          engaging experiences.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-32 h-32">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-80% h-80% object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-5 flex items-center gap-2 font-poppins">
                {project.description}
              </p>
              <div>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
