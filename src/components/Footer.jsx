import {
  FaArrowUp,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { heroData } from "../data/heroData";
import "../styles/Footer.css";

const socialLinks = [
  { href: heroData.socials.github, label: "GitHub", icon: <FaGithub /> },
  { href: heroData.socials.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: heroData.socials.facebook, label: "Facebook", icon: <FaFacebookF /> },
  { href: heroData.socials.instagram, label: "Instagram", icon: <FaInstagram /> },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Dasun<span>.</span>
            </a>

            <p>Full Stack Developer · Java · Spring Boot · React</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dasun Dilshan. All rights reserved.</p>

          <button
            className="scroll-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            Back to top
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
