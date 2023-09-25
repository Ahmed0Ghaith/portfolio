import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaInfoCircle />
      </a>
      <a
        href="#exper"
        onClick={() => setActiveNav("#exper")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BsTools />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiSolidContact />
      </a>
    </nav>
  );
};

export default Nav;
