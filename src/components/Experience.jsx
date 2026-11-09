import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Experience.css";

const timeline = [
  {
    year: "2018 - 2022",
    title: "GCE Ordinary & Advanced Level",
    company: "H/Walasmulla National School",
    description:
      "Completed GCE Ordinary Level (2018) and GCE Advanced Level (2022) in Walasmulla, Sri Lanka.",
    icon: <FaGraduationCap />,
  },
  {
    year: "Jan 2025 - Present",
    title: "Diploma in Information Technology",
    company: "Institute of Technology, University of Moratuwa",
    description:
      "Currently pursuing my Diploma in Information Technology in Homagama while building full-stack and AI-powered software projects.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2025",
    title: "Finalist – VERTEX 2025 Robotics Challenge",
    company: "Achievement · ITUM",
    description:
      "Reached the finals of the VERTEX 2025 Robotics Challenge organised by the Institute of Technology, University of Moratuwa.",
    icon: <FaTrophy />,
  },
  {
    year: "2026",
    title: "Smart Surplus Food Redistribution System",
    company: "Final Year Project · Group Leader",
    description:
      "Led a 6-member team building an AI-powered platform that redistributes near-expiry surplus food. Owned the AI layer — priority matching and surplus prediction services built with Python/FastAPI.",
    icon: <FaUsers />,
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
    company: "SLTDA Tourism Start-Up Competition 2026",
    description:
      "Built an AI-driven smart tourism platform for Sri Lanka with a monsoon-aware trip planner, demand forecasting and a Claude-powered assistant in English, Sinhala and Tamil.",
    icon: <FaCode />,
  },
  {
    year: "Future",
    title: "Software Engineer Intern",
    company: "Next Step",
    description:
      "Seeking a software engineering internship to contribute to real-world products while continuously learning new technologies.",
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
