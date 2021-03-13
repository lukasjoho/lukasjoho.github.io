import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.scss';
import { IoIosPaperPlane } from 'react-icons/io';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Contact = () => (
	<section id='contact'>
		<Container>
			<span id='back-text'>
				<FormattedMessage id='layout.contact.backgroundText' />
			</span>
			<Row>
				<Col md={6}>
					<h2>
						<FormattedMessage id='layout.contact.title' />
					</h2>
					<p>
						<FormattedMessage id='layout.contact.text' />
					</p>
				</Col>
				<Col md={6} className='mail'>
					<a href='mailto:info@excyted.io?subject=Mail from Our Site'>
						<IoIosPaperPlane />
						info@excyted.io
					</a>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Contact;
