import React from 'react'
import "./Dropdownpage.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdownfirst">
      <div className="dropping" onClick={toggleMenu}>
        {isOpen ? (
          <CgCloseR style={{ fontSize: "30px" }} />
        ) : (
          <GiHamburgerMenu style={{ fontSize: "30px" }} />
        )}
      </div>

      <div className={`slidingmenuss ${isOpen ? "open" : ""}`}>
        <a href="/">HOME</a>
        <a href="/Aboutdt">ABOUT</a>
        <a href="/Programmedetails">PROGRAMS</a>
        <a href="/Gallery">GALLERY</a>
        <a href="/Eventsec">EVENTS</a>
        <a href="/Contactus">CONTACT</a>
        
          <a href="/Registration" className="buttyss">
            REGISTER
          </a>
      </div>
    </div>
  );
};

export default Dropdown;