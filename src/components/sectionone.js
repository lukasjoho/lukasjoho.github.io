import React from "react"
import "./sectionone.scss"
import { Container, Row, Col } from "react-bootstrap"
import PremiumButton from "./buttons/PremiumButton"
import CarBack from "../images/content/car-back.png"
import Arrow from "../images/content/arrow.svg"
import larissa from "../images/content/larissa.jpg"
import skater from "../images/content/skater.jpg"
import girl from "../images/content/girl.jpg"
import people from "../images/content/people.png"

import kiel from "../images/content/kiel.jpg"
import thelen from "../images/content/thelen.jpg"
import captor from "../images/content/captor.jpg"
import Progressring from "./ProgressRing"
import code from "../images/content/code.png"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import IconCode from "../images/content/code.svg"
import IconTools from "../images/content/tools.svg"
import IconVisualz from "../images/content/visualz.svg"
import Textblock from "./textblock"

import "animate.css/animate.css";

const Sectionone = () => (
  <ParallaxProvider>
  <section id="sectionone">
    <Container>
      <Row>
        <Col md={6}>
          <Textblock 
            title="Digitale Tools" 
            text="Wir haben uns zur Aufgabe gemacht, die vielfältige Bandbreite digitaler Tools effektiv einzusetzen. Dadurch werden aus Ideen, Konzepte! 
            Aus Konzepten werden Prototypen und schließlich wollen wir Produkte erschaffen, die deine Projekte in die Welt bringen! "
            icon={IconTools}
          />
          <div class="car">
          <ScrollAnimation animateIn="animate__fadeInRight" duration="1">
            <img src={Arrow} className="arrow left" alt=""/>
          </ScrollAnimation>
          <img src={CarBack} alt="" class="car-middle"/>
          <ScrollAnimation animateIn="animate__fadeInLeft" duration="1">
          <img src={Arrow} className="arrow" alt="" />
          </ScrollAnimation>
          </div>
        </Col>
        <Col md={6}>
          <ScrollAnimation animateIn="animate__fadeInDownSmall" duration="1.5">
              <img className="people" src={people} alt="people"/>
          </ScrollAnimation>
        </Col>
      </Row>
      <hr class="hr"/>
      <Row>
        <Col md={{ size: 6, order: 2 }}>
          <Textblock
            title="Visualz"
            text="Bewegtbild und Fotografie verwirklichen wir durch einen eigenen Stil im Cutting und Editing. Planung, Konzeption und eine durchdachte Linie in der Postproduktion sind dabei genau so wichtig die der Shoot selber."
            icon={IconVisualz}
          />
          <ScrollAnimation animateIn="animate__zoomInElastic">
            <Parallax y={[0, 0]} x={[10, 0]} tagOuter="figure">
              <img className="image-right" src={kiel} alt="" width="75%"/>
            </Parallax>
            
          </ScrollAnimation>
        </Col>
        <Col md={{ size: 6, order: 1 }}>
        <div class="block-margin-top">
          <ScrollAnimation animateIn="animate__zoomInElastic">
            <Parallax y={[0, 0]} x={[-10, 0]} tagOuter="figure">
              <img src={thelen} alt=""/> 
            </Parallax>
            
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomInElastic">
            <Parallax y={[0, 0]} x={[5, -5]} tagOuter="figure">
              <img class="image-middle" src={captor} alt=""/>
            </Parallax>
            
          </ScrollAnimation>
        </div>
        </Col> 
      </Row>
      <hr className="hr"/>
      <Row>
        <Col md={6}>
          <Textblock
            title="Digital Web"
            text="...meets performance. Performance steht bei uns an erster Stelle. Speed ist das A und O, für eine erfolgreiche User Experience. Deshalb entwickeln wir unsere Websiten mit einem federleichten Javascript-Framework. Dadurch erzielen wir fast maximale Performance-Ergebnisse."
            icon={IconCode}
          />
        </Col>
        <Col md={6} className="fullheightcolumn">
            <div className="ring">
          <ScrollAnimation animateIn="animate__fadeIn" duration="1" delay="0">
          <Progressring radius="50" stroke="6" progress="94" text="Performance"/> 
          </ScrollAnimation>
          </div>
          <div className="ring">
          <ScrollAnimation animateIn="animate__fadeIn" duration="1" delay="200">
          <Progressring radius="50" stroke="6" progress="92" text="Accessibility"/> 
          </ScrollAnimation>
          </div>
          <div className="ring">
          <ScrollAnimation animateIn="animate__fadeIn" duration="1" delay="400">
          <Progressring radius="50" stroke="6" progress="100" text="Best Practice"/> 
          </ScrollAnimation>
          </div>
          <div className="ring">
          <ScrollAnimation animateIn="animate__fadeIn" duration="1" delay="600">
          <Progressring radius="50" stroke="6" progress="100" text="SEO"/> 
          </ScrollAnimation>
          </div>
        
        </Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
        <img class="code-image" src={code} alt="" width="100%"/>

          <ScrollAnimation animateIn="animate__flipInX" duration="1" delay="500">
            <div class="frame">
            <ScrollAnimation animateIn="animate__fadeIn" duration="0.5" delay="1200">
              <div className="frame-top">
              </div>
            </ScrollAnimation>
              
              <div class="frame-bottom">
              
                <div class="bottom-left"> 
                  <ScrollAnimation animateIn="animate__fadeIn" duration="0.5" delay="1300">
                    <div className="balken"></div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeIn" duration="0.5" delay="1400">
                    <div className="balken"></div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeIn" duration="0.5" delay="1500">
                    <div className="balken"></div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeIn" duration="0.5" delay="1600">
                    <div className="balken"></div>
                  </ScrollAnimation>
                </div>
                <div class="bottom-right">
                  
                  <ScrollAnimation animateIn="animate__fadeIn" duration="1" delay="1700">
                  <div class="right-fill"></div>
                  </ScrollAnimation>
                </div>
               
                  
                
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeIn" duration="0.3" delay="1800">
            <div class="squareholder">
            <ScrollAnimation animateIn="animate__zoomIn" duration="0.3" delay="2000">
            <div className="square"></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__zoomIn" duration="0.3" delay="2100">
            <div className="square"></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__zoomIn" duration="0.3" delay="2200">
            <div className="square"></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__zoomIn" duration="0.3" delay="2400">
            <div className="square"></div>
            </ScrollAnimation>
            </div>
          </ScrollAnimation>
          
        </Col>
      </Row>
    </Container>
  </section>
  </ParallaxProvider>
)

export default Sectionone
