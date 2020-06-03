import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import UiAnimation from "./uianimation"
import Progressring from "./ProgressRing"
import ImageCode from "../../images/content/image-code.png"
import ImageCar from "../../images/content/image-car.png"
import ImageKiel from "../../images/content/image-kiel.jpg"
import ImageThelen from "../../images/content/image-thelen.jpg"
import ImageCaptor from "../../images/content/image-captor.jpg"
import ImagePeople from "../../images/content/image-people.png"
import IconArrow from "../../images/content/icon-arrow.svg"
import IconCode from "../../images/content/code.svg"
import IconTools from "../../images/content/tools.svg"
import IconVisualz from "../../images/content/visualz.svg"
import Textblock from "./textblock"
import "./sections.scss"
import "animate.css/animate.css";
const Sections = () => (
  <section id="sections">
    <Container>
      {/* SECTION 1 */}
      <Row>

        <Col md={6}>
          <Textblock 
            title="Digitale Tools" 
            text="Die Bandbreite an digitalen Tools, die uns auf der Welt zur Verfügung stehen ist groß. Und das finden wir super! Denn wir lieben es digitale Werkzeuge effektiv einzusetzen, 
            sodass Ideen und Fantasien keine Grenzen bei der Umsetzung gesetzt sind. Wir mischen Kreativität mit Fähigkeiten im Web Design, der Bewegtbildproduktion und unserem ständigen Drang ausdrucksvolle Projekte in die Welt zu setzen. Damit verstehen wir uns als Produzenten in einer wachsenden Omni-Channel-Welt. "
            icon={IconTools}
          />
          <div className="section-car">
            <ScrollAnimation animateIn="animate__fadeInRight" duration="1" delay="200">
              <img src={IconArrow} className="arrow left" alt=""/>
            </ScrollAnimation>
            <img src={ImageCar} alt="" className="image-car"/>
            <ScrollAnimation animateIn="animate__fadeInLeft" duration="1" delay="200">
            <img src={IconArrow} className="arrow" alt="" />
            </ScrollAnimation>
          </div>
        </Col>

        <Col md={6}>
          <ScrollAnimation animateIn="animate__fadeInUpSmall" duration="2">
              <img className="image-people" src={ImagePeople} alt="people"/>
          </ScrollAnimation>
        </Col>
      </Row>

      <hr class="hr"/>

      {/* SECTION 2 */}
      <Row>
        <Col md={{ size: 6, order: 2 }}>
          <Textblock
            title="Visualz"
            text="Unsere Königsdisziplin, das Bewegtbild, bietet ganz besonders viel Potenzial für Excytement! Hier geht's um Feeling, Authentizität und Einzigartigkeit. Um das zu erreichen, bieten wir das volle Spektrum an Produktionsdienstleistungen an. Das beginnt bei der Konzeption, geht über die Produktion und den Schnitt und endet beim Ausrollen des Resultats über verschiedene Kanäle."
            icon={IconVisualz}
          />
          <ScrollAnimation animateIn="animate__zoomInElastic">
              <img className="image-right" src={ImageKiel} alt="" width="75%"/>
          </ScrollAnimation>
        </Col>
        <Col md={{ size: 6, order: 1 }}>
        <div className="image-offset">
          <ScrollAnimation animateIn="animate__zoomInElastic">
              <img src={ImageThelen} alt=""/> 
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__zoomInElastic">
              <img className="image-middle" src={ImageCaptor} alt=""/>
          </ScrollAnimation>
        </div>
        </Col> 
      </Row>
      <hr className="hr"/>
      {/* SECTION 3 */}
      <Row>
        <Col md={6}>
          <Textblock
            title="Digital Web"
            text="...meets performance. Performance steht bei uns an erster Stelle. Speed ist das A und O, für eine erfolgreiche User Experience. Deshalb entwickeln wir unsere Websiten mit einem federleichten Javascript-Framework. Dadurch erzielen wir fast maximale Performance-Ergebnisse."
            icon={IconCode}
          />
        </Col>
        <Col md={6} className="ring-container">
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
          <img class="image-code" src={ImageCode} alt="" width="100%"/>
          <UiAnimation/>
        </Col>
      </Row>
    </Container>
  </section>

)

export default Sections
