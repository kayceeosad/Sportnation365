import React from 'react'
import "./Hero.css";
import logo from "../../../../Images/lOGO.png";
import Dropdown from '../../Dropdownpage/Dropdownpage';


const Hero = () => {
  return (
    <div className="Herobox">
      <header className="header">
        <nav className="navead">
          <img src={logo} alt="" />
          <div className="Navboxs">
            <a href="/">HOME</a>
            <a href="/Aboutdt">ABOUT</a>
            <a href="/Programmedetails">PROGRAMS</a>
            <a href="/Gallery">GALLERY</a>
            <a href="/Eventsec">EVENTS</a>
            <a href="/Contactus">CONTACT</a>
          </div>
          <button>REGISTER</button>
          <Dropdown />
        </nav>

        <div className="text">
          <div className="ptext">
            <h1>LEARNING THE ACT OF THE GAME</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. A morbi nunc ac velit est
              tellus ipsum facilisi volutpat. .
            </p>
            <button>Join Team</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero