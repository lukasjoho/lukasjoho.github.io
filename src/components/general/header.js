import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.scss';
import logo from '../../images/logo.png';
import Lottie from 'lottie-react-web';
import navButton from '../../json/navButton.json';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggled: false,
			isPaused: false,
		};
	}
	render() {
		return (
			<header>
				<Container>
					<Navbar expand='lg'>
						<Link to='/' className='logo'>
							<img src={logo} alt='CX' />
						</Link>
						<Navbar.Toggle
							aria-controls='basic-navbar-nav'
							onClick={() => {
								this.setState((prevState) => ({
									isToggled: !prevState.isToggled,
								}));
								if (this.state.isPaused) {
									this.setState({
										isPaused: false,
									});
								} else {
									setTimeout(() => {
										this.setState({
											isPaused: true,
										});
									}, 1200);
								}
							}}
						>
							<Lottie
								width={40}
								height={40}
								isPaused={this.state.isPaused}
								direction={this.state.isToggled ? 1 : -1}
								speed={1.5}
								options={{
									animationData: navButton,
									loop: false,
								}}
							/>
						</Navbar.Toggle>
						<Navbar.Collapse id='navbar'>
							<Nav className='m-auto main-nav'>
								<Navbar.Text>
									<Link to='/' activeClassName='active'>
										Home
									</Link>
								</Navbar.Text>
								<Navbar.Text>
									<Link to='/projects' activeClassName='active'>
										Projekte
									</Link>
								</Navbar.Text>
								<Navbar.Text>
									<Link to='/services' activeClassName='active'>
										Leistungen
									</Link>
								</Navbar.Text>
								<Navbar.Text>
									<Link to='/team' activeClassName='active'>
										Team
									</Link>
								</Navbar.Text>
								<Navbar.Text>
									<Link to='/jobs' activeClassName='active'>
										Jobs
									</Link>
								</Navbar.Text>
							</Nav>
							<Nav className='ml-auto nav-email'>
								<Navbar.Text>
									<a
										className='nav-email-bright'
										href='mailto:info@excyted.io?subject=Mail from Our Site'
									>
										info@excyted.io
									</a>
								</Navbar.Text>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</header>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
