import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.scss';
import logo from '../../images/logo.png';
import Lottie from 'lottie-react-web';
import navButton from '../../json/navButton.json';
import PremiumButton from './PremiumButton';
import { useIntl, FormattedMessage, Link } from 'gatsby-plugin-intl';

const Header = ({ openModal }) => {
	const [isToggled, setIsToggled] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const intl = useIntl();

	return (
		<header>
			<Container>
				<Navbar expand='lg'>
					<Link to='/' className='logo'>
						<img src={logo} alt='CX' />
					</Link>
					<Navbar.Toggle
						style={{ fontSize: '0' }}
						aria-controls='basic-navbar-nav'
						onClick={() => {
							setIsToggled(!isToggled);

							if (isPaused) {
								setIsPaused(false);
							} else {
								setTimeout(() => {
									setIsPaused(true);
								}, 600);
							}
						}}
					>
						<Lottie
							width={32}
							height={32}
							isPaused={isPaused}
							direction={isToggled ? 1 : -1}
							speed={2}
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
									<FormattedMessage id='layout.navbar.projects' />
								</Link>
							</Navbar.Text>
							<Navbar.Text>
								<Link to='/services' activeClassName='active'>
									<FormattedMessage id='layout.navbar.services' />
								</Link>
							</Navbar.Text>
							<Navbar.Text>
								<Link to='/team' activeClassName='active'>
									Team
								</Link>
							</Navbar.Text>
						</Nav>
						<Nav className='ml-auto nav-email'>
							<Navbar.Text>
								<PremiumButton
									text={intl.formatMessage({ id: 'layout.navbar.button' })}
									modal
									openModal={openModal}
								/>
							</Navbar.Text>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
