import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Wireframes from '../sites/wireframes';
import { ParallaxProvider } from 'react-scroll-parallax';
import Accordion from './accordion';
import Picture from './picture';
import { FormattedMessage, FormattedHTMLMessage } from 'gatsby-plugin-intl';

import './services.scss';

const Services = () => (
	<section id='services'>
		<ParallaxProvider>
			<Container>
				<div className='title'>
					<h1>
						<FormattedMessage id='services.title' />
					</h1>
					<p>
						<FormattedMessage id='services.subtitle' />
					</p>
				</div>
				<Accordion />
			</Container>
			<Picture />

			<Wireframes />
			<Container>
				<div className='service-container'>
					<h2>We Create</h2>
					<Row>
						<Col
							md={6}
							style={{
								borderRight: '1.5px solid #313131',
								paddingBottom: '2.5rem',
							}}
						>
							<div className='service'>
								<h3>
									<FormattedMessage id='services.services.0.title' />
								</h3>
								<p>
									<FormattedMessage id='services.services.0.text' />
								</p>
							</div>
						</Col>
						<Col md={6} style={{ paddingBottom: '2.5rem' }}>
							<div className='service'>
								<h3>
									<FormattedMessage id='services.services.1.title' />
								</h3>
								<p>
									<FormattedMessage id='services.services.1.text' />
								</p>
							</div>
						</Col>
						<Col
							md={6}
							style={{ borderRight: '1.5px solid #313131' }}
							className='budget'
						>
							<div className='service'>
								<h3>
									<FormattedMessage id='services.services.1.title' />
								</h3>
								<p>
									<FormattedMessage id='services.services.1.text' />
								</p>
							</div>
						</Col>
						<Col md={6}>
							<div className='service'>
								<h3>
									{' '}
									<FormattedMessage id='services.services.2.title' />
								</h3>
								<p>
									<FormattedMessage id='services.services.2.text' />
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			<Container>
				<Row>
					<Col md={8} className='m-auto banner'>
						<h2>
							<FormattedMessage id='services.text.title' />
						</h2>
						<p>
							<FormattedHTMLMessage id='services.text.text' />
						</p>
					</Col>
				</Row>
			</Container>
		</ParallaxProvider>
	</section>
);

export default Services;
