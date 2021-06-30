import React from "react";
import "./Contact.css";

export default class Rectangle extends React.Component {
  render() {
    return (
      <svg
        viewBox="0 0 400 100"
        // ref={svg => (this.svg = svg)}
        style={{ overflow: "visible" }}
      >
        <rect
          x="0vmax"
          y="10"
          width="70"
          height="70"
          fill="#fce786"
          style={{ transform: "rotate(20deg)" }}
          // ref={(e) => this.svgRectElem = e}
          // onMouseDown={(e) => this.startDrag(e, this.svgRectElem)}
        />
        <text
          textAnchor="left"
          x="0"
          y="80"
          fill="#3d3d3d"
          style={{ fontSize: "30", color: "#666666", fontWeight: "900" }}
        >
          ABOUT ME
        </text>
      </svg>
    );
  }
}
