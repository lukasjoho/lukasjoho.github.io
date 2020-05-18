import React from "react"
import "./banner.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"
import logo from "../images/banner/logo.png"
import thumbnail from "../images/banner/banner-final.png"
import { Parallax } from 'react-scroll-parallax';
import StackWhu from '../images/content/whu.jpg'
import Triangle from "../images/content/triangle.svg"
import Dots from "../images/content/dots.png"
import Code1 from "../images/content/code1.png"
import Grid from "../images/content/grid.svg"
import Rectangles from "./rectangles"



const Banner = () => (
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
        <Col md={6} className="parallaxfull">
          <div className="parallax-stack">
            <div>
            <Parallax y={[0, 0]} x={[0, 10]} tagOuter="figure">
              <div className="imgequi">
              <img src={Dots} alt="" className="dots"/>  
              </div>
            </Parallax>
            </div>
            <div>
            <Parallax y={[0, -80]} x={[0, 0]} tagOuter="figure">

              <img src={Code1} alt="" className="code1"/> 

            </Parallax>
            </div>
            <div>
            <Parallax y={[0, 5]} x={[0, -8]} tagOuter="figure">
              <img src={StackWhu} alt="" className="opacity3"/>  
            </Parallax>
            </div>
            <div>
            <Parallax y={[0, 10]} x={[0, -16]} tagOuter="figure">
              <img src={StackWhu} alt="" className="opacity2"/>  
            </Parallax>
            </div>
            <div>
            <Parallax y={[0, 15]} x={[0, -24]} tagOuter="figure">
              <img src={StackWhu} alt="" className="opacity1"/>  
            </Parallax>
            </div>
            <div>
            <Parallax y={[0, 20]} x={[0, -32]} tagOuter="figure">
              <img src={StackWhu} alt=""/>  
            </Parallax>
            </div>
            
           
            <div>
            <Parallax y={[0, 25]} x={[0, -48]} tagOuter="figure">
              <img src={Triangle} alt=""/>  
            </Parallax>
            </div>
            <div className="heighter"></div>
          </div>
        </Col>
      </Row>
      
    </Container>
    <hr className="hr"/>
    <Rectangles/>
  </section>
)

export default Banner