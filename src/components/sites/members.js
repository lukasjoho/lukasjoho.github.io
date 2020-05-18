import React from "react"
import "./members.scss"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillLinkedin, AiOutlinePlayCircle, AiFillCode, AiFillCamera, AiFillVideoCamera, AiOutlineCodeSandbox } from "react-icons/ai"

const Members = () => (
  <section id="members">
    <Container>
      <div className="title">
        <h2>Unser Team</h2>
        <p>Mit wem wir excyten</p>
      </div>
      <Row>
        <Col md={{ span: 4, offset: 2 }} className="member">
          <div className="image-container member1">
            <AiOutlinePlayCircle/>
          </div>
          <h3>Lukas</h3>
          <span>- Management & Produktion -</span>
          <a href="https://www.linkedin.com/in/lukas-hoppe-948142178" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container member2">
            <AiFillCode/>
          </div>
          <h3>Antonio</h3>
          <span>- IT & Web -</span>
          <a href="https://www.linkedin.com/in/antonio-schmitter/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="member">
          <div className="image-container member3">
            <AiFillVideoCamera/>
          </div>
          <h3>David</h3>
          <span>- Kamera -</span>
          <a href="https://www.linkedin.com/company/excyted" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container member4">
            <AiFillCamera/>
          </div>
          <h3>Moritz</h3>
          <span>- Foto -</span>
          <a href="https://www.linkedin.com/company/excyted" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
        <Col md={4} className="member">
          <div className="image-container member5">
            <AiOutlineCodeSandbox/>
          </div>
          <h3>Oskar</h3>
          <span>- Kommunikation & Design -</span>
          <a href="https://www.linkedin.com/company/excyted" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Members