import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCertificate,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/About.css";

const statistics = [
  {
    icon: <FaLaptopCode />,
    number: "10+",
    label: "Projects",
  },
  {
    icon: <FaCode />,
    number: "15+",
    label: "Technologies",
  },
  {
    icon: <FaCertificate />,
    number: "08",
    label: "Certificates",
  },
  {
    icon: <FaGraduationCap />,
    number: "2026",
    label: "Graduation Year",
  },
];

const details = [
  { label: "Name", value: "Dasun Dilshan" },
  { label: "Education", value: "Diploma in IT · ITUM" },
  { label: "Focus", value: "Full-Stack & AI" },
  { label: "Seeking", value: "Software Engineering Internship" },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Turning ideas into{" "}
              <span className="gradient-text">digital solutions</span>
            </>
          }
        />

        <div className="about-bento">
          <motion.div
            className="card about-story"
            onMouseMove={handleSpotlight}
            {...reveal()}
          >
            <p className="about-lead">
              I am an Information Technology student at the Institute of
              Technology, University of Moratuwa, seeking a software
              engineering internship.
            </p>

            <p>
              I have hands-on experience designing and building full-stack web
              applications, RESTful services and database systems using Python,
              Java, Spring Boot, React and MySQL, along with coursework and
              certifications in AI/ML solutions and prompt engineering.
            </p>

            <p>
              I combine solid technical foundations with strong
              problem-solving, structured organization and collaborative
              teamwork to deliver efficient software solutions.
            </p>

            <a href="#contact" className="btn btn-ghost about-button">
              Get in touch
              <FaArrowRight />
            </a>
          </motion.div>

          <motion.div
            className="card about-details"
            onMouseMove={handleSpotlight}
            {...reveal(0.1)}
          >
            <div className="about-location">
              <FaMapMarkerAlt />
              <span>Based in Sri Lanka</span>
            </div>

            <dl>
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {statistics.map((stat, index) => (
            <motion.div
              className="card stat-card"
              key={stat.label}
              onMouseMove={handleSpotlight}
              {...reveal(0.15 + index * 0.06)}
            >
              <div className="stat-icon">{stat.icon}</div>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
