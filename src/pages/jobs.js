import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Col, Container, Row } from "react-bootstrap"
import { AiOutlineScissor } from "react-icons/ai"
import { FaCameraRetro, FaTabletAlt } from "react-icons/fa"

const Jobs = () => (
  <Layout>
    <SEO title="Jobs" description="Wir suchen Freelancer in vielen Bereichen. Melde dich bei uns."/>
    <section id="jobs">
      <Container>
        <div className="text-left"><h1>Jobs</h1><p>Excyted mit uns zu arbeiten?</p></div>
        <h2>Wir suchen Freelancer die in diesen Bereichen arbeiten:</h2>
        <Row>
          <Col md={6}>
            <ul>
              <li><FaCameraRetro/><span>Videographer</span></li>
              <li><AiOutlineScissor/><span>Graphic Designer</span></li>
              <li><AiOutlineScissor/><span>Cutter</span></li>
              <li><AiOutlineScissor/><span>UX-Design</span></li>
              <li><FaTabletAlt/><span>App-Development</span></li>
            </ul>
            <div className="contact-details">
              <span>Kontaktier uns unter:</span><br/>
              <a href="mailto:jobs@excyted.io?subject=Mail from Our Site">jobs@excyted.io</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Jobs