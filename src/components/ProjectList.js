import React from "react";
import "./ProjectList.css";
import Fade from "react-reveal/Fade";
export default class ProjectList extends React.Component {
  render() {
    return (
      <Fade bottom>
        <div className="card">
          {/* <div className="imagefiller"></div> */}
          <a href={this.props.details.link} target="_blank">
            <img
              className="img"
              src={this.props.details.image}
              alt={this.props.details.name}
            />
          </a>

          <div className="middle">
            <a href={this.props.details.link} target="_blank">
              <h1 className="projectName">{this.props.details.name}</h1>
            </a>
            <span className="date">
              <i>
                {this.props.details.type} •{" "}
                <span>{this.props.details.year}</span>
              </i>
            </span>
            <p className="projectDesc">{this.props.details.desc}</p>
          </div>
        </div>
      </Fade>
    );
  }
}
