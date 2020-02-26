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
          <span className="brand-title">Brand. Digital. and Motion.</span>
          <img src={logo} alt="Logo" className="banner-logo"/>
          <div className="typewriter-container">
          <h2 className="typewriter">because brand matters.</h2>
          </div>
          <h3>Creative Studio</h3>
          <p>Als eine hybride Werbeproduktion entwickeln wir kreative Lösungen für deine Marke, dein Unternehmen oder dein Projekt. 
            Mit dir wollen wir excyten und deine individuellen Projekte als Ganzes umsetzen. 
            Sowohl konzeptionell als auch technisch und grafisch 
            arbeiten wir mit dir gemeinsam an deiner Idee.</p>
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