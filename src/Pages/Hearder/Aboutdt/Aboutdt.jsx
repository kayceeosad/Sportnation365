import React from 'react'
import "./Aboutdt.css"
import logo from "../../../Images/lOGO.png";
import baller from "../../../Images/Component 3 (1).png"
import rowwss from "../../../Images/Arrow 1.png"
import { IoIosPeople } from "react-icons/io";
import { IoBasketballSharp } from "react-icons/io5";
import { MdPerson2 } from "react-icons/md";
import { SlTrophy } from "react-icons/sl";
import ofa from "../../../Images/Arrow 1.png"
import lines from '../../../Images/Line 3.png'
import players1 from "../../../Images/Rectangle 48.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Dropdown from "../Dropdownpage/Dropdownpage";


const Aboutdt = () => {
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
          <h1>ABOUT US</h1>
        </div>
      </header>
      <div className="aboutmore">
        <div className="aboutsecond">
          <div className="spin">
            <img src={baller} alt="" />
          </div>

          <div className="readme">
            <div className="arrows">
              <img src={rowwss} alt="" />
              <h6>ABOUT US</h6>
            </div>
            <div className="aboutptext">
              <h2>
                Welcome to <span className="colred"> Sport Nation 365</span>{" "}
                Academy
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed purus mattis ut
                aenean lacus. Eu dignissim aliquam nascetur neque et at. Felis
                commodo nec adipiscing pellentesque erat. Dignissim mauris vel
                ut volutpat risus volutpat feugiat nisl ipsum. Malesuada
                vulputate auctor in bibendum lorem imperdiet faucibus. Leo quam
                mollis ut pellentesque enim elit et consectetur eget. Auctor id
                maecenas turpis lorem condimentum volutpat. Vel velit porttitor
                id integer nisi nisl. Quam ut eget orci leo lacus sit nulla eget
                amet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="statistcis">
        <div className="statistcis_sec">
          <div className="ptptp">
            <div className="people">
              <IoIosPeople className="rticon" />
              <h3>30</h3>
            </div>
            <p>Team Members</p>
          </div>
          <div className="ptptp">
            <div className="people">
              <IoBasketballSharp className="rticon" />
              <h3>30</h3>
            </div>
            <p>Matches Played</p>
          </div>
          <div className="ptptp">
            <div className="people">
              <SlTrophy className="rticon" />
              <h3>5</h3>
            </div>
            <p>Awards won</p>
          </div>
          <div className="ptptp">
            <div className="people">
              <MdPerson2 className="rticon" />
              <h3>5</h3>
            </div>
            <p>Qualifed Coach</p>
          </div>
        </div>
      </div>
      <div className="corevalues">
        <div className="event_sectionss">
          <div className="rows">
            <img src={ofa} alt="" />
            <p>OUR CORE VALUES</p>
          </div>
          <h4>Who We Are</h4>
        </div>
        <div className="coresecond">
          <div className="missionsss">
            <h3>Our Mission</h3>
            <img src={lines} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor nunc orci
              pellentesque imperdiet tellus erat etiam augue leo. Enim sed eget
              dolor feugiat turpis. Mollis amet condimentum diam cras neque nec
              nisl platea vestibulum. Sagittis cras elementum eget non id lacus
              habitant. Quam sit in penatibus nascetur ac bibendum diam. Vel ac
              neque amet malesuada pulvinar tristique nulla. A pharetra pharetra
              lacus vestibulum. Consequat ut enim a eu eu mi. Aliquam habitasse
              aliquet risus id malesuada viverra.
            </p>
          </div>
          <div className="missionsss">
            <h3>Our Vision</h3>
            <img src={lines} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor nunc orci
              pellentesque imperdiet tellus erat etiam augue leo. Enim sed eget
              dolor feugiat turpis. Mollis amet condimentum diam cras neque nec
              nisl platea vestibulum. Sagittis cras elementum eget non id lacus
              habitant. Quam sit in penatibus nascetur ac bibendum diam. Vel ac
              neque amet malesuada pulvinar tristique nulla. A pharetra pharetra
              lacus vestibulum. Consequat ut enim a eu eu mi. Aliquam habitasse
              aliquet risus id malesuada viverra.
            </p>
          </div>
          <div className="missionsss">
            <h3>Our Strategy</h3>
            <img src={lines} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor nunc orci
              pellentesque imperdiet tellus erat etiam augue leo. Enim sed eget
              dolor feugiat turpis. Mollis amet condimentum diam cras neque nec
              nisl platea vestibulum. Sagittis cras elementum eget non id lacus
              habitant. Quam sit in penatibus nascetur ac bibendum diam. Vel ac
              neque amet malesuada pulvinar tristique nulla. A pharetra pharetra
              lacus vestibulum. Consequat ut enim a eu eu mi. Aliquam habitasse
              aliquet risus id malesuada viverra.
            </p>
          </div>
        </div>
      </div>

      <div className="contactdiv">
        <div className="texts">
          <div className="ptexts">
            <h1>COME JOIN US, AWAKEN YOUR PLAYING BASKETBALL</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu cras ornare augue
              nibh diam magna. Netus suscipit faucibus praesent amet. Varius id
              vulputate euismod egestas ultricies. Montes augue nisi vitae donec
              nulla.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>

      <div className="ourteam_section">
        <div className="team_sectionss">
          <div className="rowsSS">
            <img src={ofa} alt="" />
            <p>OUR TEAM</p>
          </div>
          <h4>Experience Players & Coach</h4>
        </div>
        <div className="players_Section">
          <div className="color_section">
            <div className="imgss">
              <img src={players1} alt="" />
              <div className="namesss">
                <h3>James crown</h3>
                <p>Player</p>
                <div className="iconnify">
                  <a href="">
                    <FaSquareXTwitter className="twitter" />
                  </a>
                  <a href="">
                    <FaFacebook className="twitter" />
                  </a>
                  <a href="">
                    <FaInstagram className="twitter" />
                  </a>
                  <a href="">
                    <FaLinkedin className="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="color_section">
            <div className="imgss">
              <img src={players1} alt="" />
              <div className="namesss">
                <h3>James crown</h3>
                <p>Player</p>
                <div className="iconnify">
                  <a href="">
                    <FaSquareXTwitter className="twitter" />
                  </a>
                  <a href="">
                    <FaFacebook className="twitter" />
                  </a>
                  <a href="">
                    <FaInstagram className="twitter" />
                  </a>
                  <a href="">
                    <FaLinkedin className="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="color_section">
            <div className="imgss">
              <img src={players1} alt="" />
              <div className="namesss">
                <h3>James crown</h3>
                <p>Player</p>
                <div className="iconnify">
                  <a href="">
                    <FaSquareXTwitter className="twitter" />
                  </a>
                  <a href="">
                    <FaFacebook className="twitter" />
                  </a>
                  <a href="">
                    <FaInstagram className="twitter" />
                  </a>
                  <a href="">
                    <FaLinkedin className="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="color_section">
            <div className="imgss">
              <img src={players1} alt="" />
              <div className="namesss">
                <h3>James crown</h3>
                <p>Player</p>
                <div className="iconnify">
                  <a href="">
                    <FaSquareXTwitter className="twitter" />
                  </a>
                  <a href="">
                    <FaFacebook className="twitter" />
                  </a>
                  <a href="">
                    <FaInstagram className="twitter" />
                  </a>
                  <a href="">
                    <FaLinkedin className="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutdt