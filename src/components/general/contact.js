import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./contact.scss"
import {IoIosPaperPlane} from "react-icons/io"

const Contact = () => (
  <section id="contact">
    <Container>
      <span id="back-text">Kontakt</span>
      <Row>
        <Col md={6}>
          <h2>Let's talk!</h2>
          <p>Egal ob du eine große Agentur, ein neues Start-Up, ein kleines Studio hast oder einfach
            jemand mit einer Idee oder einem unvollendeten Projekt bist: Schreib uns!</p>
        </Col>
        <Col md={6} className="mail">
          <a href="mailto:info@excyted.io?subject=Mail from Our Site"><IoIosPaperPlane/>info@excyted.io</a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Contact