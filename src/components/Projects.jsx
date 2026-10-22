import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Projects.css";

const projects = [
  {
    title: "SK Fashion POS System",
    description:
      "A complete point-of-sale system for a clothing store with product management, inventory control, sales processing and customer management.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "AI Customer Support Chatbot",
    description:
      "An AI-powered chatbot that provides fast and helpful customer support responses using the OpenAI API.",
    technologies: ["Java", "Spring Boot", "React", "OpenAI API"],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "AI Food Redistribution System",
    description:
      "An intelligent food redistribution platform that connects supermarkets, charities, farms and composting facilities.",
    technologies: ["Spring Boot", "React", "MySQL", "AI"],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "TourMate AI",
    description:
      "An intelligent tourism platform that helps travellers discover destinations, create travel plans and receive personalized recommendations.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
];

// A project has a live demo only once liveDemo points somewhere real
const hasLiveDemo = (project) => project.liveDemo && project.liveDemo !== "#";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Featured projects"
          title={
            <>
              Some things <span className="gradient-text">I have built</span>
            </>
          }
          description="Software projects I have developed while improving my full-stack development skills."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="card project-card"
              key={project.title}
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="project-visual" aria-hidden="true">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="project-window">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="chip" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub />
                    Source code
                    <FaArrowRight className="link-arrow" />
                  </a>

                  {hasLiveDemo(project) && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
