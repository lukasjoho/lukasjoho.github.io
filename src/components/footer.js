import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col md={6}>
          <h3>excyted UG</h3>
          <ul>
            <li><Link to="/" activeClassName="active">Creative Studio</Link></li>
            <li><a href="mailto:info@excyted.io?subject=Mail from Our Site">info@excyted.io</a></li>
            <li><a href="https://www.linkedin.com/company/excyted" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
            <li><a href="https://www.instagram.com/excyted.io/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
          </ul>
        </Col>
        <Col md={3}>
          <h3>Sitemap</h3>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/projects" activeClassName="active">Projekte</Link></li>
            <li><Link to="/services" activeClassName="active">Leistungen</Link></li>
            <li><Link to="/team" activeClassName="active">Team</Link></li>
          </ul>
        </Col>
        <Col md={3}>
          <h3>Rechtliches</h3>
          <ul>
            <li><Link to="/imprint" activeClassName="active">Impressum</Link></li>
            <li><Link to="/imprint#privacy" activeClassName="active">Datenschutz</Link></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer