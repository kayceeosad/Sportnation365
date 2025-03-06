import React from 'react'
import "./Contactus.css"
import logo from "../../../Images/lOGO.png"
import row from "../../../Images/Arrow 1.png"
import { FaPhoneAlt } from "react-icons/fa";
import line6 from "../../../Images/Line 6.png"
import { IoLocation } from "react-icons/io5";
import Dropdown from '../Dropdownpage/Dropdownpage';



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
          <h1>CONTACT</h1>
        </div>
      </header>

      <div className="formsectiondivx">
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
                <div className="labellsss">
                  <label>First Name</label> <br />
                  <input type="text" placeholder="First name" />
                  <br />
                </div>
                <div className="labellsss">
                  <label>Last Name</label> <br />
                  <input type="text" placeholder="Last name" /> <br />
                </div>
              </div>
              <div className="firstform">
                <div className="labellsss">
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Email" />
                  <br />
                </div>
                <div className="labellsss">
                  <label>Phone</label> <br />
                  <input type="tel" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className="messagesdiv">
              <label>Message</label>
              <br />
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="buttondiv">
              <button>Submit</button>
            </div>
          </form>

          <div className="detailsdivvs">
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
              <div className="numericss">
                <h6>Location</h6>
                <img src={line6} alt="" />
                <p>50,Femi pedro street Okota,lagos Nigeria.</p>
              </div>
            </div>
            <div className="numberdiv">
              <FaPhoneAlt className="locate" />
              <div className="numericsss">
                <h6>Training Hours</h6>
                <img src={line6} alt="" />
                <p>Tue (5pm - 7pm)</p>
                <p>Thur (9am - 12pm)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        className="mapssss"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3963.9880547860416!2d3.2921950749929296!3d6.523190893469393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s50%2CFemi%20pedro%20street%20Okota%2Clagos%20Nigeria!5e0!3m2!1sen!2sng!4v1739697444762!5m2!1sen!2sng"
        width="90%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contactus