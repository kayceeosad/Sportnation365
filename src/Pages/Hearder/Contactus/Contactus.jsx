import React from 'react'
import "./Contactus.css"
import logo from "../../../Images/lOGO.png"
import row from "../../../Images/Arrow 1.png"
import { FaPhoneAlt } from "react-icons/fa";
import line6 from "../../../Images/Line 6.png"


const Contactus = () => {
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
            <a href="">CONTACT</a>
          </nav>
          <div className="register-btn">
            <a href="#register">Register</a>
          </div>
        </div>
        <div className="hero-section">
          <h1>CONTACT</h1>
        </div>
      </header>

      <div>
        <div className="getin_section">
          <div className="gettiiin">
            <img src={row} alt="" />
            <h3>Get In Touch</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue donec nulla felis id.
          </p>
        </div>

        <div className="form_Section">
          <form>
            <div className="form-grid">
              <div className="firstform">
                <div>
                  <label>First Name</label> <br />
                  <input type="text" placeholder="First name" />
                  <br />
                </div>
                <div>
                  <label>Last Name</label> <br />
                  <input type="text" placeholder="Last name" /> <br />
                </div>
              </div>
              <div className="firstform">
                <div>
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Email" />
                  <br />
                </div>
                <div>
                  <label>Phone</label> <br />
                  <input type="tel" placeholder="Phone" />
                </div>
              </div>
            </div>
            <textarea placeholder="Message"></textarea>
          </form>

          <div className='detailsdivvs'>
            <div className="numberdiv">
              <FaPhoneAlt className="locate" />
              <div className="numerics">
                <h6>Call Us</h6>
                <img src={line6} alt="" />
                <p>234-8123456789</p>
                <p>234-8123456789</p>
              </div>
            </div>
            <div className="numberdivs">
              <FaPhoneAlt className="locate" />
              <div className="numerics">
                <h6>Location</h6>
                <img src={line6} alt="" />
                <p>50,Femi pedro street Okota,lagos Nigeria.</p>
              </div>
            </div>
            <div className="numberdiv">
              <FaPhoneAlt className="locate" />
              <div className="numerics">
                <h6>Training Hours</h6>
                <img src={line6} alt="" />
                <p>Tue (5pm - 7pm)</p>
                <p>Thur (9am - 12pm)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus