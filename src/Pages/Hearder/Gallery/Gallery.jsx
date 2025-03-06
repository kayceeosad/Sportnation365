import React from 'react'
import "./Gallery.css"
import logo from "../../../Images/lOGO.png"
import first from "../../../Images/Ist Pic.png";
import second from "../../../Images/2nd pic.png";
import trd from "../../../Images/3rd pic.png";
import four from "../../../Images/4t pic.png";
import five from "../../../Images/5t pic.png";
import six from "../../../Images/6t pic.png";
import seven from "../../../Images/7t pc.png";
import eigt from "../../../Images/8t pic.png";
import nines from "../../../Images/9t pic.png";
import ten from "../../../Images/galk9.png";
import ofa from "../../../Images/Arrow 1.png";
import Dropdown from '../Dropdownpage/Dropdownpage';

const Gallery = () => {
  return (
    <div>
      <header className="headers">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav className="Navbox">
            <a href="/">HOME</a>
            <a href="/Aboutdt">ABOUT</a>
            <a href="/Programmedetails">PROGRAMS</a>
            <a href="/Gallery">GALLERY</a>
            <a href="/Eventsec">EVENTS</a>
            <a href="/Contactus">CONTACT</a>
          </nav>
          <Dropdown />
          <div className="register-btn">
            <a href="/Registration">
              <button>REGISTER</button>
            </a>
          </div>
        </div>
        <div className="hero-section">
          <h1>GALLERY</h1>
        </div>
      </header>
      <div className="gallerysection">
        <div className="first_text">
          <div className="rows">
            <img src={ofa} alt="" />
            <p>OUR GALLERY</p>
          </div>
          <h4>PLAYERS & TALENT SHOWCASE</h4>
        </div>

        <div className="picturrres">
          <div className="fivepicturess">
            <img src={first} alt="" />
            <img src={six} alt="" />
          </div>
          <div className="fivepicturess2">
            <img src={second} alt="" />
            <img src={seven} alt="" />
          </div>
          <div className="fivepicturess3">
            <img src={trd} alt="" />
            <img src={eigt} alt="" />
          </div>
          <div className="fivepicturess4">
            <img src={four} alt="" />
            <img src={nines} alt="" />
          </div>
          <div className="fivepicturess5">
            <img src={five} alt="" />
            <img src={ten} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery