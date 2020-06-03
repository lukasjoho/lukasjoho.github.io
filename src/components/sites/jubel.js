import React from "react";
import "./jubel.scss";
import ImageJubel from "../../images/content/kiel-jubel.jpg";
import RectangleOutline from "../../images/content/rectangle.svg";
import { Col, Row, Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.css";

class Jubel extends React.Component {
  render() {
    return (
      <section id="jubel">
        <Container>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={7} md={5}>
              <img src={ImageJubel} alt="" width="100%" />
            </Col>
            <Col xs={5} md={5} className="center-col">
              <div className="rectangle"></div>
              <div className="text">
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <h1>
                    Nur <br />
                    Gemeinsam
                    <br />
                    Wird's
                    <br />
                    Gut
                  </h1>
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default Jubel;
