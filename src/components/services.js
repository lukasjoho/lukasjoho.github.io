import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AiOutlineEye, AiOutlineAppstore } from "react-icons/ai"
import { MdShowChart } from "react-icons/md"
import "./services.scss"

const Services = () => (
  <section id="services">
    <Container>
      <div className="title">
        <h1>Unsere Leistungen</h1>
        <p>Wie wir excyten</p>
      </div>
      <Row className="services-with-icons">
        <Col md={4}>
          <div className="service-title">
            <AiOutlineEye/>
            <h2>Visuals</h2>
          </div>
          <ul>
            <li>Film</li>
            <li>Foto</li>
            <li>Motion Design</li>
            <li>Graphic Design</li>
          </ul>
        </Col>
        <Col md={4}>
          <div className="service-title">
            <AiOutlineAppstore/>
            <h2>Design</h2>
          </div>
          <ul>
            <li>Prototyping</li>
            <li>UI/UX</li>
            <li>Corporate Identity</li>
            <li>Corporate Design</li>
          </ul>
        </Col>
        <Col md={4}>
          <div className="service-title">
            <MdShowChart/>
            <h2>Strategy</h2>
          </div>
          <ul>
            <li>Marketing</li>
            <li>Positioning</li>
            <li>Content Strategy</li>
          </ul>
        </Col>
      </Row>
      <div className="service-container">
        <h2>We Create</h2>
        <Row>
          <Col md={6} style={{ borderRight: "1.5px solid #313131", paddingBottom: "2.5rem" }}>
            <div className="service">
              <h3>Zielsetzung</h3>
              <p>
                Was sind eure Werbeziele und wer ist eure Zielgruppe?<br/>
                Dies ist der erste wichtige Baustein im
                Produktenstehungsprozess, über den sowohl Sie als auch wir
                uns im Klaren sein müssen. <br/>
                Nur dann kann das Produkt entsprechend effektiv konzipiert
                und gestaltet werden.
              </p>
            </div>
          </Col>
          <Col md={6} style={{ paddingBottom: "2.5rem" }}>
            <div className="service">
              <h3>Konzeption</h3>
              <p>
                Damit die tatsächliche Umsetzung der Leistungsspezifikation
                ins Produkt effizient durchgeführt werden kann, ist eine
                entsprechende Konzeption vorher wichtig. Wir initieren
                diesen Prozess im Vorhinein.
              </p>
            </div>
          </Col>
          <Col md={6} style={{ borderRight: "1.5px solid #313131" }} className="budget">
            <div className="service">
              <h3>Budgetierung</h3>
              <p>
                Wie umfassend das Projekt ist und wie viel Arbeit in dieses
                Projekt gesteckt werden kann hängt unter anderem vom
                Umfang des Budgets ab. Aber keine Angst, unser
                Leistungsangebot ist so aufgestellt, dass auch Projekte mit
                schmaleren Budgets realisiert werden können.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="service">
              <h3>Produktion</h3>
              <p>
                Hier wird das Produkt erstellt, iterativ nachbearbeitet und
                final ausgegeben. Wo die Ausführung am entscheidensten
                ist, arbeiten wir gerne eng mit dem Kunden zusammen.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    <Container>
      <Row>
        <Col md={8} className="m-auto banner">
          <h2>We tell your story</h2>
          <p>Wir sind professionell, aber locker und offen.
            <br/>
            Wir arbeiten für noch so kleine Details.
            <br/>
            Wir arbeiten in einem kreativen und kollaborativen Umfeld.
            <br/>
            Wir sind vielfältig.
            <br/>
            Wir lieben, was wir machen.</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Services