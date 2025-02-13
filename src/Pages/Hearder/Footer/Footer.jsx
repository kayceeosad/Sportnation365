import React from 'react'
import "./Footer.css"
import logoo from "../../../Images/lOGO.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";



const Footer = () => {
  return (
    <div className="footermain">
      <div className="footersecond">
        <div className="logodiv">
          <img src={logoo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit in pellentesque risus
            vitae tempus sed nulla lorem nulla.
          </p>
          <div className="iconnify">
            <a href="">
              <FaSquareXTwitter />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="dreedives">
          <div className="links">
            <h3>QUICKLINKS</h3>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Programs</a>
            <a href="">News/Event</a>
            <a href="">Gallery</a>
          </div>
          <div className="getin">
            <h3>GET IN TOUCH</h3>
            <div className="listing">
              <IoLocationSharp className="locate" />
              <p>50,Femi Pedro street Okota,Lagos Nigeria.</p>
            </div>
            <div className="listing">
              <FaPhoneAlt className="locate" />
              <p>+234(8-)123456789</p>
            </div>
            <div className="listing">
              <MdOutlineMailOutline className="locate" />
              <p>Info@sportnation365.com</p>
            </div>
          </div>
          <div className="letter">
            <h3>OUR NEWSLETTER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit in pellentesque risus
              vitae tempus sed nulla lorem nulla.
            </p>
            <input type="email" placeholder="Email" className="email" />
            <div className="buttondisss">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <p className='copy'>Copyright 2025.Sportnation365academy.All right reserved</p>
    </div>
  );
}

export default Footer