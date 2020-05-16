import React from "react"
import "./banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"
import logo from "../images/banner/logo.png"
import thumbnail from "../images/banner/banner-final.png"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const Banner = () => (
  <ParallaxProvider>
  <section id="banner">
    <Container>
      <Row>
        <Col md={6} className="banner-text">
          <div className="typewriter-container">
          <h2 className="typewriter">Brand. Digital. and Motion.</h2>
          </div>
          <img src={logo} alt="Logo" className="banner-logo"/>
          
          <h3>Creative Studio</h3>
          <p>Als eine hybride Werbeproduktion entwickeln wir kreative Lösungen für deine Marke, dein Unternehmen oder dein Projekt. 
            Mit dir wollen wir excyten und deine individuellen Projekte als Ganzes umsetzen. 
            Sowohl konzeptionell als auch technisch und grafisch 
            arbeiten wir mit dir gemeinsam an deiner Idee.</p>
          <PremiumButton to="/projects" text="Unsere Projekte"/>
        </Col>
        <Col md={6} className="showcase">
          <div >
          <img src={thumbnail} alt="Thumbnail" className="banner-image"/>
          </div>
        </Col>
      </Row>
      
    </Container>
    <div class="rectangles">
        <div class="rect">
          <h1 class="rect-text solid">Fokus</h1>    
        </div>
        <div class="rect">
        <Parallax y={[50, -50]} x={[150, -150]} tagOuter="figure">
          <h1 class="rect-text transparent">Fokus</h1>
        </Parallax>
        
        </div>
        <div class="rect">
        <Parallax y={[-50, 50]} x={[-150, 150]} tagOuter="figure">
          <h1 class="rect-text transparent">Fokus</h1>
        </Parallax>
        </div>
      </div>
  </section>
  </ParallaxProvider>
)

export default Banner