import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Dasun.</h2>

          <p>
            Full Stack Developer | Java | Spring Boot | React
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/dgdasun"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dasun-dilshan-2811b7360/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://web.facebook.com/dasun.dilshan.9212"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <button className="scroll-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Dasun Dilshan. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;