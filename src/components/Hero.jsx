import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import profileImage from "../assets/profile.jpeg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-image-area"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="hero-image-glow"></div>

          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Dasun Dilshan"
              className="hero-profile-image"
            />
          </div>
        </motion.div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <motion.p
            className="hero-small"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            👋 Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            Dasun <span>Dilshan</span>
          </motion.h1>

          <div className="typing-text">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Java Developer",
                "Spring Boot Developer",
                "React Developer",
                "AI Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </div>

          <p className="education">
            Software Engineering Undergraduate
          </p>

          <p className="hero-description">
            I create scalable, modern and responsive web applications using
            Java, Spring Boot, React and MySQL, with a strong focus on clean
            code and excellent user experiences.
          </p>

          <div className="hero-buttons">
            <a
  href="/resume/Dasun_Dilshan_CV.pdf"
  download="Dasun_Dilshan_CV.pdf"
  className="btn-primary"
>
  Download CV
</a>

            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/dgdasun"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dasun-dilshan-2811b7360/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://web.facebook.com/dasun.dilshan.9212"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/da._sun/"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:dasundilshan376@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
      >
        <span>Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </motion.a>
    </section>
  );
}

export default Hero;