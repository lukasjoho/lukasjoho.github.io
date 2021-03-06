import React from 'react';
import './values.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFastForward } from 'react-icons/fi';
import { MdReplay, MdSettingsInputComponent } from 'react-icons/md';
import { FaClipboardCheck } from 'react-icons/fa';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Values = () => (
	<section id='values'>
		<Container>
			<div className='title'>
				<h2>
					<FormattedMessage id='team.values.title' />
				</h2>
				<span>
					<FormattedMessage id='team.values.subtitle' />
				</span>
			</div>
			<Row>
				<Col md={6} className='value'>
					<div className='icon'>
						<FiFastForward />
					</div>
					<h3>
						<FormattedMessage id='team.values.values.0.title' />
					</h3>
					<p>
						<FormattedMessage id='team.values.values.0.text' />
					</p>
				</Col>

				<Col md={6} className='value'>
					<div className='icon'>
						<MdReplay />
					</div>
					<h3>
						<FormattedMessage id='team.values.values.1.title' />
					</h3>
					<p>
						<FormattedMessage id='team.values.values.1.text' />
					</p>
				</Col>

				<Col md={6} className='value'>
					<div className='icon'>
						<MdSettingsInputComponent />
					</div>
					<h3>
						<FormattedMessage id='team.values.values.2.title' />
					</h3>
					<p>
						<FormattedMessage id='team.values.values.2.text' />
					</p>
				</Col>

				<Col md={6} className='value'>
					<div className='icon'>
						<FaClipboardCheck />
					</div>
					<h3>
						<FormattedMessage id='team.values.values.3.title' />
					</h3>
					<p>
						<FormattedMessage id='team.values.values.3.text' />
					</p>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Values;
