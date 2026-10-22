import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      className={centered ? "section-heading centered" : "section-heading"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default SectionHeading;
