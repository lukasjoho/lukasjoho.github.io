import React from 'react';
import AccordionBody from './accordion.body';
import { Row, Col } from 'react-bootstrap';
import {
	AiOutlineDesktop,
	AiOutlineCloudServer,
	AiOutlineYoutube,
} from 'react-icons/ai';
import './accordion.scss';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

const ServicesAccordion = () => {
	const intl = useIntl();
	return (
		<section id='accordion'>
			<Row className='services-with-icons'>
				<Col md={4}>
					<div className='service-title'>
						<AiOutlineDesktop />
						<h2>
							<FormattedMessage id='services.accordion.0.title' />
						</h2>
					</div>
					<ul>
						<AccordionBody
							title1={intl.formatMessage({
								id: 'services.accordion.0.items.0.title',
							})}
							text1={intl.formatMessage({
								id: 'services.accordion.0.items.0.text',
							})}
							title2={intl.formatMessage({
								id: 'services.accordion.0.items.1.title',
							})}
							text2={intl.formatMessage({
								id: 'services.accordion.0.items.1.text',
							})}
							title3={intl.formatMessage({
								id: 'services.accordion.0.items.2.title',
							})}
							text3={intl.formatMessage({
								id: 'services.accordion.0.items.2.text',
							})}
						/>
					</ul>
				</Col>
				<Col md={4}>
					<div className='service-title'>
						<AiOutlineCloudServer />
						<h2>
							<FormattedMessage id='services.accordion.1.title' />
						</h2>
					</div>
					<ul>
						<AccordionBody
							title1={intl.formatMessage({
								id: 'services.accordion.1.items.0.title',
							})}
							text1={intl.formatMessage({
								id: 'services.accordion.1.items.0.text',
							})}
							title2={intl.formatMessage({
								id: 'services.accordion.1.items.1.title',
							})}
							text2={intl.formatMessage({
								id: 'services.accordion.1.items.1.text',
							})}
							title3={intl.formatMessage({
								id: 'services.accordion.1.items.2.title',
							})}
							text3={intl.formatMessage({
								id: 'services.accordion.1.items.2.text',
							})}
						/>
					</ul>
				</Col>
				<Col md={4}>
					<div className='service-title'>
						<AiOutlineYoutube />
						<h2>
							<FormattedMessage id='services.accordion.2.title' />
						</h2>
					</div>
					<ul>
						<AccordionBody
							title1={intl.formatMessage({
								id: 'services.accordion.2.items.0.title',
							})}
							text1={intl.formatMessage({
								id: 'services.accordion.2.items.0.text',
							})}
							title2={intl.formatMessage({
								id: 'services.accordion.2.items.1.title',
							})}
							text2={intl.formatMessage({
								id: 'services.accordion.2.items.1.text',
							})}
							title3={intl.formatMessage({
								id: 'services.accordion.2.items.2.title',
							})}
							text3={intl.formatMessage({
								id: 'services.accordion.2.items.2.text',
							})}
						/>
					</ul>
				</Col>
			</Row>
		</section>
	);
};

export default ServicesAccordion;
