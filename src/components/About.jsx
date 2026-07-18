import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";

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

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-subtitle">ABOUT ME</p>
          <h2>Turning Ideas Into Digital Solutions</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I am an Information Technology undergraduate and aspiring
              full-stack developer from Sri Lanka.
            </p>

            <p>
              I enjoy building practical, responsive and user-friendly
              applications using Java, Spring Boot, React and MySQL. I am
              continuously improving my knowledge in backend development,
              REST APIs, database design and modern frontend technologies.
            </p>

            <p>
              My goal is to become a professional software engineer and create
              reliable digital solutions that solve real-world problems.
            </p>

            <div className="about-details">
              <div>
                <span>Name</span>
                <strong>Dasun Dilshan</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Sri Lanka</strong>
              </div>

              <div>
                <span>Education</span>
                <strong>IT Undergraduate</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Full-Stack Development</strong>
              </div>
            </div>

            <a href="#contact" className="about-button">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            {statistics.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;