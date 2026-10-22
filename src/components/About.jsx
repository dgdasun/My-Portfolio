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
    number: "04+",
    label: "Projects",
  },
  {
    icon: <FaCode />,
    number: "12+",
    label: "Technologies",
  },
  {
    icon: <FaCertificate />,
    number: "05+",
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
  { label: "Education", value: "IT Undergraduate" },
  { label: "Focus", value: "Full-Stack Development" },
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
              I am an Information Technology undergraduate and aspiring
              full-stack developer from Sri Lanka.
            </p>

            <p>
              I enjoy building practical, responsive and user-friendly
              applications using Java, Spring Boot, React and MySQL. I am
              continuously improving my knowledge in backend development, REST
              APIs, database design and modern frontend technologies.
            </p>

            <p>
              My goal is to become a professional software engineer and create
              reliable digital solutions that solve real-world problems.
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
