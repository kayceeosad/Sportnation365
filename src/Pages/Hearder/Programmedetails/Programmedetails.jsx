import React from 'react'
import "./Programmedetails.css"
import logo from "../../../Images/lOGO.png";
import ofa from "../../../Images/Arrow 1.png"
import kid from "../../../Images/Component 3.png"
import adult from "../../../Images/Component 4.png"
import Dropdown from '../Dropdownpage/Dropdownpage';


const Programmedetails = () => {
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
          <h1>PROGAM</h1>
        </div>
      </header>

      <div className="programdetailsdiv">
        <div className="first_text">
          <div className="rows">
            <img src={ofa} alt="" />
            <p>OUR PROGRAMS</p>
          </div>
          <h4>START MOVING & JUMPING WITH YOUR SKILLS.</h4>
        </div>

        <div className="kiddiesdiv">
          <div className="aboveone">
            <img src={kid} alt="" />
            <div className="abovetwo">
              <h4>
                KIDDIES & <span className="teen">TEENAGERS</span> TEAM
                (8yrs-Above)
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Leo venenatis eu id
                turpis volutpat. Cras magnis eget arcu sagittis nisl turpis
                ultrices. Ultrices pulvinar lacus odio rutrum. Donec suspendisse
                laoreet ullamcorper et urna lorem. Elementum nunc ornare
                ullamcorper morbi vitae in fermentum.
              </p>
              <div className="button_one">
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="kiddiesdiv">
          <div className="aboveone">
            <div className="abovetwo">
              <h4>
                YOUNG & <span className="teen">ADULT</span> TEAM (25yrs-Above)
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Leo venenatis eu id
                turpis volutpat. Cras magnis eget arcu sagittis nisl turpis
                ultrices. Ultrices pulvinar lacus odio rutrum. Donec suspendisse
                laoreet ullamcorper et urna lorem. Elementum nunc ornare
                ullamcorper morbi vitae in fermentum.
              </p>
              <div className="button_one">
                <button>View More</button>
              </div>
            </div>
            <img src={adult} alt="" />
          </div>
        </div>

        <div className="kiddiesdiv">
          <div className="aboveone">
            <img src={kid} alt="" />
            <div className="abovetwo">
              <h4>
                KIDDIES & <span className="teen">TEENAGERS</span> TEAM
                (8yrs-Above)
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Leo venenatis eu id
                turpis volutpat. Cras magnis eget arcu sagittis nisl turpis
                ultrices. Ultrices pulvinar lacus odio rutrum. Donec suspendisse
                laoreet ullamcorper et urna lorem. Elementum nunc ornare
                ullamcorper morbi vitae in fermentum.
              </p>
              <div className="button_one">
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="contactdiv">
          <div className="texts">
            <div className="ptexts">
              <h1>COME JOIN US, AWAKEN YOUR PLAYING BASKETBALL</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu cras ornare augue
                nibh diam magna. Netus suscipit faucibus praesent amet. Varius
                id vulputate euismod egestas ultricies. Montes augue nisi vitae
                donec nulla.
              </p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmedetails