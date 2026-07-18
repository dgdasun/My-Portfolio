import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";

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
    <section className="certificates" id="certificates">
      <div className="certificates-container">
        <motion.div
          className="certificates-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p>CERTIFICATES</p>

          <h2>Licenses & Certifications</h2>

          <span>
            A selection of certifications that support my learning journey.
          </span>
        </motion.div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.div
              className="certificate-card"
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="certificate-year">
                {certificate.year}
              </div>

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <div className="certificate-buttons">
                <a
                  href={certificate.preview}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEye />
                  Preview
                </a>

                <a
                  href={certificate.download}
                  download
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