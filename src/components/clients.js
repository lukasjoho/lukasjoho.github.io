import React from "react"
import "./clients.scss"
import { Row, Col, Container } from "react-bootstrap"
import logo from "../images/clients/default.jpg"

const Clients = () => (
  <section id="clients">
    <Container>
      <div className="title">
        <h2>Unsere Kunden</h2>
        <span>Hier hatten wir unsere Pfoten im Spiel</span>
      </div>
      <Row className="client-logo-container">
        <Col md={6} className="client-logo-wrapper">
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
        </Col>
        <Col md={6} className="client-logo-wrapper">
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
        </Col>
        <Col md={6} className="client-logo-wrapper">
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
        </Col>
        <Col md={6} className="client-logo-wrapper">
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
          <img src={logo} alt=""/>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Clients