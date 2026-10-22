import { motion } from "framer-motion";
import { FaAward, FaDownload, FaEye } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Certificates.css";

const certificates = [
  {
    title: "Java Programming",
    issuer: "Oracle / Course Provider",
    year: "2025",
    preview: "/certificates/java.pdf",
    download: "/certificates/java.pdf",
  },
  {
    title: "Spring Boot Development",
    issuer: "Udemy",
    year: "2025",
    preview: "/certificates/springboot.pdf",
    download: "/certificates/springboot.pdf",
  },
  {
    title: "React Development",
    issuer: "Coursera",
    year: "2026",
    preview: "/certificates/react.pdf",
    download: "/certificates/react.pdf",
  },
  {
    title: "UI/UX Design",
    issuer: "Figma",
    year: "2026",
    preview: "/certificates/figma.pdf",
    download: "/certificates/figma.pdf",
  },
];

function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <SectionHeading
          eyebrow="Certificates"
          title="Licenses & certifications"
          description="A selection of certifications that support my learning journey."
        />

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.div
              className="card certificate-card"
              key={certificate.title}
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="certificate-top">
                <div className="certificate-icon">
                  <FaAward />
                </div>
                <span className="chip">{certificate.year}</span>
              </div>

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <div className="certificate-buttons">
                <a
                  href={certificate.preview}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Preview ${certificate.title} certificate`}
                >
                  <FaEye />
                  Preview
                </a>

                <a
                  href={certificate.download}
                  download
                  aria-label={`Download ${certificate.title} certificate`}
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
