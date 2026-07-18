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
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <GitHubStats />
      <GitHubRepositories />
      <Contact />
      <Footer />
    </>
  );
}

export default App;