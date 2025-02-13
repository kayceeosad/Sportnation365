import React from 'react'
import "./Event.css"
import row from "../../../../Images/Arrow 1.png"
import scene1 from "../../../../Images/Rectangle 7.png"
import vect1 from "../../../../Images/Vector (12).png"
import line1 from "../../../../Images/Line 1 (1).png"
import vect2 from "../../../../Images/Vector (13).png"
import vect3 from "../../../../Images/Vector (14).png"

const Event = () => {
  return (
    <div className="eventss">
      <div className="eventsecond">
        <div className="event_section">
          <div className="upcoming">
            <img src={row} alt="" />
            <p>UPCOMING EVENTS</p>
          </div>
          <h3>LEARN BASKETBALL</h3>
        </div>
        <div className="bballscene">
          <div className='bballscene2'>
            <div className="debbby">
              <img src={scene1} alt="" />
            </div>
            <div className="secball">
              <div className="numbers">
                <img className="imgone" src={vect1} alt="" />
                <p>26 JAN 2024</p>
                <img src={line1} alt="" />
              </div>
              <div className="numbers">
                <img className="imgone" src={vect2} alt="" />
                <p>12:00-2:00</p>
                <img src={line1} alt="" />
              </div>
              <div className="numbers">
                <img className="imgone" src={vect3} alt="" />
                <p>OKOTA,LAGOS</p>
                <img src={line1} alt="" />
              </div>
            </div>
            <p className="ptext_one">
              Lorem ipsum dolor sit amet consectetur. Felis id vel pretium amet
              id volutpat ipsum. Donec faucibus mattis nibh scelerisque
              consectetur diam.
            </p>
            <div className="buttondivs">
              <a href="http://localhost:3000/Eventsec">
                <button>View Details</button>
              </a>
            </div>
          </div>
          <div>
            <div className="debbby">
              <img src={scene1} alt="" />
            </div>
            <div className="secball">
              <div className="numbers">
                <img className="imgone" src={vect1} alt="" />
                <p>26 JAN 2024</p>
                <img src={line1} alt="" />
              </div>
              <div className="numbers">
                <img className="imgone" src={vect2} alt="" />
                <p>12:00-2:00</p>
                <img src={line1} alt="" />
              </div>
              <div className="numbers">
                <img className="imgone" src={vect3} alt="" />
                <p>OKOTA,LAGOS</p>
                <img src={line1} alt="" />
              </div>
            </div>
            <p>
              <p className="ptext_one">
                Lorem ipsum dolor sit amet consectetur. Felis id vel pretium
                amet id volutpat ipsum. Donec faucibus mattis nibh scelerisque
                consectetur diam.
              </p>
              <div className="buttondivs">
                <a href="http://localhost:3000/Eventsec">
                  <button>View Details</button>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event