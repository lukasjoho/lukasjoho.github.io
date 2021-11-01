import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FaObjectGroup, FaPencilRuler, FaCode } from 'react-icons/fa';

import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

const Jobs = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'jobs.seo.title' })}
				description={intl.formatMessage({ id: 'jobs.seo.description' })}
			/>
			<section id='jobs'>
				<Container>
					<div className='text-left'>
						<h1>
							<FormattedMessage id='jobs.title' />
						</h1>
						<p>
							<FormattedMessage id='jobs.subtitle' />
						</p>
					</div>
					<h2>
						<FormattedMessage id='jobs.heading' />
					</h2>
					<Row>
						<Col md={6}>
							<ul>
								<li>
									<FaCode />
									<span>Frontend React Development</span>
								</li>
								<li>
									<AiOutlineCloudServer />
									<span>Backend Node.js Development</span>
								</li>
								<li>
									<FaObjectGroup />
									<span>UX/UI-Design</span>
								</li>
								<li>
									<FaPencilRuler />
									<span>3D Design</span>
								</li>
							</ul>
							<div className='contact-details'>
								<span>
									<FormattedMessage id='jobs.contactUs' />
								</span>
								<br />
								<a href='mailto:info@excyted.io?subject=Mail from Our Site'>
									info@excyted.io
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Jobs;
