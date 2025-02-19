import React from 'react'
import "./Programmes.css";
import ofa from "../../../../Images/Arrow 1.png"
import kid from "../../../../Images/Component 3.png"
import adult from "../../../../Images/Component 4.png"
import first from "../../../../Images/Ist Pic.png"
import second from "../../../../Images/2nd pic.png"
import trd from "../../../../Images/3rd pic.png"
import four from "../../../../Images/4t pic.png"
import five from "../../../../Images/5t pic.png"
import six from "../../../../Images/6t pic.png"
import seven from "../../../../Images/7t pc.png"
import eigt from "../../../../Images/8t pic.png"
import nines from "../../../../Images/9t pic.png"
import ten from "../../../../Images/galk9.png"
import woman from "../../../../Images/Ellipse 5.png"
import comma from "../../../../Images/comma.png"
import { GoDotFill } from "react-icons/go";
import blog from "../../../../Images/blog pics.png"
import sms from "../../../../Images/Vector (16).png"
import prson from "../../../../Images/Vector (17).png"
import lineone from "../../../../Images/Line 1 (2).png"




const Programmes = () => {
  return (
    <div className="programm_one">
      <div className="progam_two">
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
                <a href="http://localhost:3000/Programmedetails">
                  <button>View More</button>
                </a>
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
                <a href="http://localhost:3000/Programmedetails">
                  <button>View More</button>
                </a>
              </div>
            </div>
            <img src={adult} alt="" />
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
             <div className="fivepicturess">
              <img src={trd} alt="" />
              <img src={eigt} alt="" />
            </div>
            <div className="fivepicturess">
              <img src={four} alt="" />
              <img src={nines} alt="" />
            </div>
            <div className="fivepicturess">
              <img src={five} alt="" />
              <img src={ten} alt="" />
            </div> 
          </div>
        </div>

        <div className="testimonaildiv">
          <div className="event_sections">
            <div className="upcoming">
              <img src={ofa} alt="" />
              <p>TESTIMONAL</p>
            </div>
            <h3>CLIENTS FEEDBACK</h3>
          </div>
          <div className="coachdiv">
            <div className="comma">
              <div className="pretty">
                <img src={woman} alt="" />
                <div>
                  <p>GLADYS OSENI</p>
                  <div className="coac">
                    <p>Coach</p>
                  </div>
                </div>
              </div>
              <img src={comma} alt="" />
            </div>
            <div className="ptaggg">
              <p>
                Lorem ipsum dolor sit amet consectetur. Etiam ut quisque sapien
                nisl nisi eu dui nec. Purus vitae et diam ac et vel aliquet sed
                tincidunt. Scelerisque eget nibh suscipit donec tincidunt
                ultrices semper varius amet. Ut sit pretium gravida risus. Id
                nulla scelerisque commodo pretium s
              </p>
              <div className="fordot">
                <div className="fordotss">
                  <GoDotFill />
                </div>
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blogdivs">
        <div className="seconddivvss">
          <div className="first_text">
            <div className="rows">
              <img src={ofa} alt="" />
              <p>BLOG</p>
            </div>
            <h4>LASTEST NEWS AND EVENTS</h4>
          </div>

          <div className="blogdiv">
            <div className="treeboxes">
              <div className="blogdivtwo">
                <div className="bigimg">
                  <img src={blog} alt="" />
                </div>
                <div className="commentss">
                  <div className="comments">
                    <img src={sms} alt="" />
                    <p>Leave a comment</p>
                  </div>
                  <div className="comments">
                    <img src={prson} alt="" />
                    <p>Kelvin duke</p>
                  </div>
                </div>
                <div className="linesss">
                  <h3>
                    Major tournament organize by sport nation 365 academy.
                  </h3>
                  <img src={lineone} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pretium egestas quam
                    habitasse et id tellus. Porta amet adipiscing volutpat
                    tempor et risus ac.
                  </p>
                </div>
                <div className="buttondivsss">
                  <button>Read more</button>
                </div>
              </div>
              <div className="blogdivtwo">
                <div className="bigimg">
                  <img src={blog} alt="" />
                </div>
                <div className="commentss">
                  <div className="comments">
                    <img src={sms} alt="" />
                    <p>Leave a comment</p>
                  </div>
                  <div className="comments">
                    <img src={prson} alt="" />
                    <p>Kelvin duke</p>
                  </div>
                </div>
                <div className="linesss">
                  <h3>New student registration from sport 365 academy.</h3>
                  <img src={lineone} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pretium egestas quam
                    habitasse et id tellus. Porta amet adipiscing volutpat
                    tempor et risus ac.
                  </p>
                </div>
                <div className="buttondivsss">
                  <button>Read more</button>
                </div>
              </div>
              <div className="blogdivtwo">
                <div className="bigimg">
                  <img src={blog} alt="" />
                </div>
                <div className="commentss">
                  <div className="comments">
                    <img src={sms} alt="" />
                    <p>Leave a comment</p>
                  </div>
                  <div className="comments">
                    <img src={prson} alt="" />
                    <p>Kelvin duke</p>
                  </div>
                </div>
                <div className="linesss">
                  <h3>Basketball event that will be hold this year.</h3>
                  <img src={lineone} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pretium egestas quam
                    habitasse et id tellus. Porta amet adipiscing volutpat
                    tempor et risus ac.
                  </p>
                </div>
                <div className="buttondivsss">
                  <button>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmes