import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'gatsby-plugin-intl';
import './footer.scss';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Footer = () => (
	<footer>
		<Container>
			<Row>
				<Col md={6}>
					<h3>excyted UG</h3>
					<ul>
						<li>
							<Link to='/' activeClassName='active'>
								Technology Studio
							</Link>
						</li>
						<li>
							<a href='mailto:info@excyted.io?subject=Mail from Our Site'>
								info@excyted.io
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/company/excyted'
								rel='noopener noreferrer'
								target='_blank'
							>
								Linkedin
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/excyted.io/'
								rel='noopener noreferrer'
								target='_blank'
							>
								Instagram
							</a>
						</li>
					</ul>
				</Col>
				<Col md={3}>
					<h3>Sitemap</h3>
					<ul>
						<li>
							<Link to='/' activeClassName='active'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/projects' activeClassName='active'>
								<FormattedMessage id='layout.footer.projects' />
							</Link>
						</li>
						<li>
							<Link to='/services' activeClassName='active'>
								<FormattedMessage id='layout.footer.services' />
							</Link>
						</li>
						<li>
							<Link to='/team' activeClassName='active'>
								Team
							</Link>
						</li>
						<li>
							<Link to='/jobs' activeClassName='active'>
								Jobs
							</Link>
						</li>
					</ul>
				</Col>
				<Col md={3}>
					<h3>
						<FormattedMessage id='layout.footer.legal' />
					</h3>
					<ul>
						<li>
							<Link to='/legal-notice' activeClassName='active'>
								<FormattedMessage id='layout.footer.legalNotice' />
							</Link>
						</li>
						<li>
							<Link to='/legal-notice#privacy' activeClassName='active'>
								<FormattedMessage id='layout.footer.dataPrivacy' />
							</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
