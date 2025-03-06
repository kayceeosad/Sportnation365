import React from 'react'
import "./Registration.css"
import logo from "../../Images/lOGO.png"
import Dropdown from '../Hearder/Dropdownpage/Dropdownpage';
import moment from "../../Images/Rectangle 52.png"
import row from "../../Images/Arrow 1.png"

export const Registration = () => {
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
          <h1>REGISTER</h1>
        </div>
      </header>

      <div className="firstdivvvs">
        <div className="secondivvs">
          <div className='imgdivvviss'>
            <img src={moment} alt="" />
          </div>

          <div className="formholding">
            <div className="getin_section">
              <div className="gettiiin">
                <img src={row} alt="" />
                <h3>Let’s get you started</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Augue donec nulla felis
                id.
              </p>
            </div>
            <form>
              <div className="form-grid">
                <div className="firstforms">
                  <div className="labellssss">
                    <label>First Name</label> <br />
                    <input type="text" placeholder="First name" />
                    <br />
                  </div>
                  <div className="labellssss">
                    <label>Last Name</label> <br />
                    <input type="text" placeholder="Last name" /> <br />
                  </div>
                </div>
                <div className="firstforms">
                  <div className="labellssss">
                    <label>Email</label>
                    <br />
                    <input type="email" placeholder="Email" />
                    <br />
                  </div>
                  <div className="labellssss">
                    <label>Phone</label> <br />
                    <input type="tel" placeholder="Phone" />
                  </div>
                  <div className="labellssss">
                    <label>Address</label> <br />
                    <input type="tel" placeholder="Enter Address" />
                  </div>
                </div>
              </div>
              <div className="messagesdivs">
                <label>Message</label>
                <br />
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="buttondivss">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
