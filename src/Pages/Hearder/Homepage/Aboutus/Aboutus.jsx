import React from 'react'
import "./Aboutus.css";
import two from "../../../../Images/Group 1.png"
import row from "../../../../Images/Arrow 1.png"

const Aboutus = () => {
  return (
    <div className="about_section">
      <div className="aboutsecond">
        <div className='imges2w'>
          <img src={two} alt="" />
        </div>

        <div className="readme">
          <div className="arrows">
            <img src={row} alt="" />
            <h6>ABOUT US</h6>
          </div>
          <div className="aboutptext">
            <h2>
              Welcome to <span className="colred"> Sport Nation 365</span>{" "}
              Academy
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed purus mattis ut aenean
              lacus. Eu dignissim aliquam nascetur neque et at. Felis commodo
              nec adipiscing pellentesque erat. Dignissim mauris vel ut volutpat
              risus volutpat feugiat nisl ipsum. Malesuada vulputate auctor in
              bibendum lorem imperdiet faucibus. Leo quam mollis ut pellentesque
              enim elit et consectetur eget. Auctor id maecenas turpis lorem
              condimentum volutpat. Vel velit porttitor id integer nisi nisl.
              Quam ut eget orci leo lacus sit nulla eget amet.
            </p>
            <div className="buttondiv">
              <a href="http://localhost:3000/Aboutdt">
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus