import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="projects-subtitle">FEATURED PROJECTS</p>

          <h2>Some Things I Have Built</h2>

          <p>
            These are some of the software projects I have developed while
            improving my full-stack development skills.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
            >
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
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
                    GitHub
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
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