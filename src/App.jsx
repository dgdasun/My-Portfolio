import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import GitHubStats from "./components/GitHubStats";
import GitHubRepositories from "./components/GitHubRepositories";

import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <div className="page-background" aria-hidden="true">
        <div className="page-grid" />
        <div className="page-orb page-orb-one" />
        <div className="page-orb page-orb-two" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <GitHubStats />
        <GitHubRepositories />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
