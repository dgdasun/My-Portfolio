import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiReact, SiSpringboot } from "react-icons/si";

import profileImage from "../assets/profile.jpeg";
import { heroData } from "../data/heroData";
import "../styles/Hero.css";

const socialLinks = [
  { href: heroData.socials.github, label: "GitHub", icon: <FaGithub /> },
  { href: heroData.socials.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: heroData.socials.facebook, label: "Facebook", icon: <FaFacebookF /> },
  { href: heroData.socials.instagram, label: "Instagram", icon: <FaInstagram /> },
  { href: heroData.socials.email, label: "Email", icon: <FaEnvelope /> },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const [firstName, ...lastNames] = heroData.name.split(" ");

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="badge-dot" />
            Available for internships &amp; projects
          </motion.div>

          <motion.p className="hero-greeting" variants={fadeUp}>
            {heroData.greeting}
          </motion.p>

          <motion.h1 variants={fadeUp}>
            {firstName}{" "}
            <span className="gradient-text">{lastNames.join(" ")}</span>
          </motion.h1>

          <motion.div className="hero-role" variants={fadeUp}>
            <span className="role-prefix">&gt;</span>
            <Typewriter
              words={heroData.roles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </motion.div>

          <motion.p className="hero-description" variants={fadeUp}>
            {heroData.description}
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href={heroData.resume}
              download="Dasun_Dilshan_CV.pdf"
              className="btn btn-ghost"
            >
              <FaDownload />
              Download CV
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={fadeUp}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
        >
          <div className="hero-ring" aria-hidden="true" />

          <div className="hero-portrait">
            <img src={profileImage} alt={heroData.name} />
          </div>

          <motion.div
            className="floating-card floating-card-top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiSpringboot className="floating-icon spring" />
            <div>
              <strong>Backend</strong>
              <span>Java · Spring Boot</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiReact className="floating-icon react" />
            <div>
              <strong>Frontend</strong>
              <span>React · JavaScript</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-down"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
      </motion.a>
    </section>
  );
}

export default Hero;
