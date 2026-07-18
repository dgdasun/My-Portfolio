import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Your message form is ready. Later we can connect it to EmailJS or a backend API."
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-subtitle">GET IN TOUCH</p>

          <h2>Let&apos;s Work Together</h2>

          <p>
            Have a project idea, internship opportunity or collaboration in
            mind? Feel free to contact me.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-info-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:dasundilshan376@gmail.com">
                  dasundilshan376@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>

              <div>
                <span>LinkedIn</span>

                <a
                  href="https://www.linkedin.com/in/dasun-dilshan-2811b7360/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dasun Dilshan
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <span>GitHub</span>

                <a
                  href="https://github.com/dgdasun"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/dgdasun
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <p>Sri Lanka</p>
              </div>
            </div>

            <div className="contact-availability">
              <span className="availability-dot"></span>

              <p>Available for internships and software projects</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
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
                placeholder="Enter message subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-button">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;