import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./header.scss"
import logo from "../images/logo.png"
import { AiOutlineAlignRight } from "react-icons/ai";


const Header = () => (
  <header>
    <Container>
      <Navbar expand="lg">
        <Link to="/" className="logo"><img src={logo} alt="CX"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <AiOutlineAlignRight/>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar">
          <Nav className="m-auto main-nav">
            <Navbar.Text><Link to="/" activeClassName="active">Home</Link></Navbar.Text>
            <Navbar.Text><Link to="/projects" activeClassName="active">Projekte</Link></Navbar.Text>
            <Navbar.Text><Link to="/services" activeClassName="active">Leistungen</Link></Navbar.Text>
            <Navbar.Text><Link to="/team" activeClassName="active">Team</Link></Navbar.Text>
            <Navbar.Text><Link to="/jobs" activeClassName="active">Jobs</Link></Navbar.Text>
          </Nav>
          <Nav className="ml-auto nav-email">
            <Navbar.Text>
              <a class="nav-email-bright" href="mailto:info@excyted.io?subject=Mail from Our Site">info@excyted.io</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
