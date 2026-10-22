import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Experience.css";

const timeline = [
  {
    year: "2025 - Present",
    title: "National Diploma Technology",
    company: "Institute of Technology, University of Moratuwa",
    description:
      "Currently pursuing my National Diploma in Information Technology while developing practical software engineering skills.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2026",
    title: "AI Customer Support Chatbot",
    company: "Personal Project",
    description:
      "Developed an AI-powered customer support chatbot using Java, Spring Boot, React and OpenAI API.",
    icon: <FaCode />,
  },
  {
    year: "2026",
    title: "SK Fashion POS System",
    company: "Personal Project",
    description:
      "Built a complete Point of Sale system with inventory management, billing, customers and reports.",
    icon: <FaCode />,
  },
  {
    year: "2026",
    title: "TourMate AI",
    company: "Personal Project",
    description:
      "Developed an AI tourism platform with personalized travel recommendations and itinerary planning.",
    icon: <FaCode />,
  },
  {
    year: "Future",
    title: "Software Engineer",
    company: "Career Goal",
    description:
      "Seeking opportunities to contribute to innovative software projects while continuously learning new technologies.",
    icon: <FaBriefcase />,
    upcoming: true,
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="My journey"
          title="Education & experience"
          description="Where I'm learning, what I've built and where I'm headed."
        />

        <ol className="timeline">
          {timeline.map((item, index) => (
            <motion.li
              className={item.upcoming ? "timeline-item upcoming" : "timeline-item"}
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="timeline-marker">{item.icon}</div>

              <div className="card timeline-card" onMouseMove={handleSpotlight}>
                <div className="timeline-meta">
                  <span className="chip">{item.year}</span>
                  <span className="timeline-company">{item.company}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
