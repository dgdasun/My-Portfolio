import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Projects.css";

const projects = [
  {
    title: "AI-Powered Smart Surplus Food Redistribution & Waste Reduction System",
    role: "Final Year Project · Group Leader",
    description:
      "Led a 6-member team building a platform that redistributes near-expiry surplus food to people in need, with expiry detection, food listings, reservations, QR-based allocation and analytics. Owned the AI layer: a priority matching algorithm that allocates food requests and an AI-based surplus prediction service, delivered as Python/FastAPI microservices.",
    technologies: [
      "Java Spring Boot",
      "React (Vite)",
      "MongoDB",
      "Python",
      "FastAPI",
      "JWT",
    ],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "Nandana Stores – ERP & POS System",
    description:
      "An ERP and point-of-sale system for a retail store, with a React/TypeScript front-end and a Spring Boot 3 / Java 17 back-end persisting data through Spring Data JPA and MySQL.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot 3",
      "Java 17",
      "Spring Data JPA",
      "MySQL",
    ],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "SK Fashion – POS System",
    description:
      "Full-stack point-of-sale and inventory management system for clothing shops, covering product management, inventory control, sales processing and customer management.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "SK Fashion – E-Commerce Website",
    description:
      "A responsive online clothing store for showcasing products and promotions.",
    technologies: [],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "E-Commerce Backend System",
    description:
      "A scalable back-end for product management, transactions and APIs.",
    technologies: [],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "Smart Health Monitoring System",
    description:
      "A web system for health tracking and preventive health insights.",
    technologies: [],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "Student Event Management System",
    description: "A university event management web application.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/dgdasun",
    liveDemo: "#",
  },
  {
    title: "Complaint Management System",
    description:
      "A full-stack platform for submitting, tracking and managing complaints.",
    technologies: [],
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
                {project.role && (
                  <span className="project-role">{project.role}</span>
                )}

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {project.technologies.length > 0 && (
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span className="chip" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

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
