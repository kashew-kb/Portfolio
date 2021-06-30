import React from "react";
import logo from "../assets/kb-logo.png";
import Typer from "./Typer";
import FontAwesome from "react-fontawesome";
import "./Home.css";

export default class Home extends React.Component {
  componentDidMount() {
    const weeks = localStorage.getItem("weeks");
    const totalWeeks = localStorage.getItem("totalWeeks");
    this.setState({ weeks, totalWeeks });
  }
  render() {
    return (
      <div className="first">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <h1>Kashish Bakshi</h1>
        </div>
        <div>
          <p>
            <Typer
              heading={"I"}
              dataText={["Watch.", "  ", "Learn.", "Repeat."]}
            />
          </p>
        </div>
        {/* <div
          style={{
            position: " relative",
            bottom: "-15vh",
            color: "#f8f8f8",
            opacity: "0.8"
          }}
        >
          <FontAwesome name="chevron-circle-down" size="3x" />
        </div> */}
      </div>
    );
  }
}
