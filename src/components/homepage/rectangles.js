import React from "react";
import "./rectangles.scss";
import { Parallax } from "react-scroll-parallax";

class Rectangles extends React.Component {
  render() {
    return (
      <section id="rectangles">
        <div className="tagline">
          <p>turning ideas into</p>
        </div>
        <div className="rectangle-container">
          <div className="rectangle">
            <h1 className="solid">eye-popping reality</h1>
          </div>
          <div className="rectangle">
            <Parallax y={[50, -50]} x={[150, -150]} tagOuter="figure">
              <h1 class="transparent">eye-popping reality</h1>
            </Parallax>
          </div>
          <div className="rectangle">
            <Parallax y={[-50, 50]} x={[-150, 150]} tagOuter="figure">
              <h1 className="transparent">eye-popping reality</h1>
            </Parallax>
          </div>
        </div>
      </section>
    );
  }
}

export default Rectangles;
