import React from "react"
import "./members.scss"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillLinkedin, AiOutlinePlayCircle } from "react-icons/ai"

const Members = () => (
  <section id="members">
    <Container>
      <div className="title">
        <h2>Unser Team</h2>
        <p>Mit wem wir excyten</p>
      </div>
      <Row>
        <Col md={{ span: 4, offset: 2 }} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member1</h3>
          <span>- management and camera -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member2</h3>
          <span>- camera -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member3</h3>
          <span>- IT & WEB -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member4</h3>
          <span>- photo -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Member5</h3>
          <span>- communication & design -</span>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Members