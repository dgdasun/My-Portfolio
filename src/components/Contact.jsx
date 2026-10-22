import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { heroData } from "../data/heroData";
import { handleSpotlight } from "../utils/spotlight";
import "../styles/Contact.css";

const contactLinks = [
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "Dasun Dilshan",
    href: heroData.socials.linkedin,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/dgdasun",
    href: heroData.socials.github,
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function Contact() {
  const [copied, setCopied] = useState(false);

  // Opens the visitor's email app with the form contents pre-filled
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const body = `${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`;

    window.location.href = `mailto:${heroData.email}?subject=${encodeURIComponent(
      form.get("subject")
    )}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(heroData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = heroData.socials.email;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s <span className="gradient-text">work together</span>
            </>
          }
          description="Have a project idea, internship opportunity or collaboration in mind? Feel free to contact me."
        />

        <div className="contact-layout">
          <motion.div className="contact-info" {...reveal()}>
            <div className="card contact-email" onMouseMove={handleSpotlight}>
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <span className="contact-label">Email me at</span>

              <a href={heroData.socials.email} className="contact-email-address">
                {heroData.email}
              </a>

              <button type="button" className="copy-button" onClick={copyEmail}>
                {copied ? <FaCheck /> : <FaCopy />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="card contact-link"
                onMouseMove={handleSpotlight}
              >
                <div className="contact-icon">{link.icon}</div>

                <div>
                  <span className="contact-label">{link.label}</span>
                  <strong>{link.value}</strong>
                </div>

                <FaArrowRight className="contact-link-arrow" />
              </a>
            ))}

            <div className="contact-availability">
              <span className="availability-dot" />
              <FaMapMarkerAlt />
              {heroData.location} · Available for internships and software
              projects
            </div>
          </motion.div>

          <motion.form
            className="card contact-form"
            onSubmit={handleSubmit}
            {...reveal(0.1)}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Internship opportunity"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Send message
              <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
