import React from "react";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import FontAwesome from "react-fontawesome";
import rec1 from "../assets/rec.32779635.jpg";
import projects from "../projects";
import Fontawesome from "react-fontawesome";
import "./App.css";

export default class App extends React.Component {
  // state = {
  //   projects: {}
  // };
  constructor(props) {
    super(props);
    this.state = {
      projects: {}
    };
    //creates a reference for your element to use
    this.myDivToFocus = React.createRef();
  }

  componentDidMount() {
    this.loadSample();
  }

  loadSample = () => {
    this.setState({
      projects: projects
    });
  };
  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };

  render() {
    return (
      <div className="overall">
        
        <div className="call">
          <Home />
          <div
            style={{
              position: " relative",
              bottom: "20vh",
              color: "#f8f8f8",
              opacity: "0.8",
              width: "fit-content"
            }}
          >
            <FontAwesome
              name="chevron-circle-down"
              size="3x"
              onClick={this.handleOnClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>  

        <div className="call1" ref={this.myDivToFocus}>
          <About />
        </div>

        <div className="contact">
          <Contact />
         
        </div>
        
        
        <div className="downlast">
          Baked with &nbsp;
          <span role="img" aria-label="heart">💕</span>
          &nbsp; by Kashish
        </div>
      </div>
    );
  }
}
