import React from "react";
import './About.css';
import profile from "../assets/profile.jpg";
// import peep from "../assets/peep.png";
import Fade from "react-reveal/Fade";
import rec from "../assets/rec.32779635.jpg";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div>
            <img className="image" src={profile} alt="profile"></img>
            {/* <img className="image2" src={peep} alt="profile"></img> */}
          </div>
          {/* <Fade right cascade> */}
          <div className="mobileContainer">
            <div className="aboutH">
              <Fade right cascade>
                <h2 className="heading" style={{ zIndex: 2, top: "5% " }}>
                  About Me
                </h2>
                {/* <Rectangle1></Rectangle1> */}
              </Fade>
              <img src={rec} alt="rec" className="rec"></img>
            </div>
            <Fade right>
              <p className="para">
                Hi, I'm Kashish! I am a Techie, currently
                "Scientist B" at {" "}
                {/* <span style={{ color: "#31708E", fontWeight: "500" }}> */}
                NIC.
                {/* </span> */}
                <br /> Blockchain Enthusiast who ironically started working in Cloud Orchestration and Devops.
                Be it Open Stack or PERN Stack -- I have worked on both.
                Have leveraged Data Engineering and explored it's potential in many of my side projects.
                Fumbling and tumbling while learning system design but getting better.
                Towards becoming who I always wanted to be !
                <br />
                You can find my Resume{" "}
                <a
                  href="./CV_Kartik.pdf"
                  style={{ textDecorationColor: "#7d7968" }}
                >
                  <span
                    style={{
                      // textDecoration: "underline",
                      // textDecorationColor: "#7d7968",
                      color: "#7d7968",
                      fontWeight: "bold"
                    }}
                  >
                    here
                  </span>
                </a>
                .
              </p>
            </Fade>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    );
  }
}
