import { useState } from "react";
import Modal from "react-modal";
import { projects } from "../constants";
import CTA from "../components/CTA";

// Set the app element for accessibility purposes
Modal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    if (project.isYoutube) {
      setSelectedProject(project.link);
      setModalIsOpen(true);
    } else {
      window.open(project.link, "_blank");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  const renderProjectCard = (project) => (
    <div className="lg:w-[400px] w-full" key={project.name}>
      <div className="block-container w-32 h-32">
        <div
          className={`btn-back rounded-xl ${project.theme}`}
          onClick={() => handleProjectClick(project)}
        />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <a href="#" onClick={() => handleProjectClick(project)}>
            <img
              src={project.iconUrl}
              alt="Project Icon"
              className="w-[80%] h-[80%] object-contain"
            />
          </a>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
        <p className="mt-5 flex items-center gap-2 font-poppins">
          {project.description}
        </p>
      </div>
    </div>
  );

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
          These projects are a straightforward application of my current
          understanding of game development principles and modern web. Moving
          forward, my focus is on deepening my proficiency with Unreal Engine
          and Unity, aiming to broaden my knowledge in game mechanics, game
          design, storytelling, and digital art, in order to create more
          immersive and engaging experiences.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map(renderProjectCard)}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video"
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-content">
          {selectedProject && (
            <div className="embed-container">
              <iframe
                src={selectedProject}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
          )}
          <div className="close-button" onClick={closeModal}></div>
        </div>
      </Modal>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
