import { motion } from "framer-motion";
import "../styles/Experience.css";

const timeline = [
  {
    year: "2025 - Present",
    title: "National Diploma Technology",
    company: "Institute of Technology, University of Moratuwa",
    description:
      "Currently pursuing my National Diploma in Information Technology while developing practical software engineering skills.",
  },
  {
    year: "2026",
    title: "AI Customer Support Chatbot",
    company: "Personal Project",
    description:
      "Developed an AI-powered customer support chatbot using Java, Spring Boot, React and OpenAI API.",
  },
  {
    year: "2026",
    title: "SK Fashion POS System",
    company: "Personal Project",
    description:
      "Built a complete Point of Sale system with inventory management, billing, customers and reports.",
  },
  {
    year: "2026",
    title: "TourMate AI",
    company: "Personal Project",
    description:
      "Developed an AI tourism platform with personalized travel recommendations and itinerary planning.",
  },
  {
    year: "Future",
    title: "Software Engineer",
    company: "Career Goal",
    description:
      "Seeking opportunities to contribute to innovative software projects while continuously learning new technologies.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="experience-subtitle">MY JOURNEY</p>
          <h2>Education & Experience</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;