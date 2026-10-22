import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiPostman, SiSpringboot } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Backend",
    description: "APIs, business logic and data.",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#f89820" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
      { name: "REST API", icon: <TbApi />, color: "var(--accent)" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
    ],
  },
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces.",
    skills: [
      { name: "React", icon: <FaReact />, color: "#58c4dc" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#2965f1" },
    ],
  },
  {
    title: "Tools",
    description: "Shipping and collaborating.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, color: "currentColor" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "Figma", icon: <FaFigma />, color: "#a259ff" },
    ],
  },
];

const allSkills = skillGroups.flatMap((group) => group.skills);

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Tech stack"
          title="Technologies I work with"
          description="The tools I use to design, build and ship full-stack applications."
        />

        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <motion.div
              className="card skill-group"
              key={group.title}
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name} style={{ "--skill-color": skill.color }}>
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <span key={index} style={{ "--skill-color": skill.color }}>
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
