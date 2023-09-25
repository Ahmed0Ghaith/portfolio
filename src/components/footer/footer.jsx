import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
       Ahmed Ghaith
      </a>
   
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/ahmed-ghaith/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
  <a
        href="https://www.youtube.com/@AhmedGhaith"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube />
      </a>
      <a
        href="https://www.freecodecamp.org/ahmedghaith"
        target="_blank"
        rel="noreferrer"
      >
        <FaFreeCodeCamp />
      </a>{" "}
        <a
          href="https://github.com/Ahmed0Ghaith"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubInverted />
        </a>
      </div>

      <div className="copyright">
        <small>&copy; Ahmed Ghaith</small>
      </div>
    </footer>
  );
};

export default footer;
