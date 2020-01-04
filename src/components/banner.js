import React from "react"
import "./banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"
import logo from "../images/banner/logo.png"
import thumbnail from "../images/banner/banner-final.png"

const Banner = () => (
  <section id="banner">
    <Container>
      <Row>
        <Col md={6} className="banner-text">
          <span className="brand-title">Brand. Digital and Motion.</span>
          <img src={logo} alt="Logo" className="banner-logo"/>
          <h3>MEDIENAGENTUR</h3>
          <p>Als eine hybride Werbeproduktion entwickeln wir kreative
            Lösungen für deine Marke, dein Unternehmen oder dein Projekt.
            Unser Fokus liegt auf Qualität und individueller Zusammenarbeit.</p>
          <PremiumButton to="/projects" text="Unsere Projekte"/>
        </Col>
        <Col md={6} className="showcase">
          <img src={thumbnail} alt="Thumbnail" className="banner-image"/>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Banner