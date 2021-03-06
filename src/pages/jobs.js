import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineScissor } from 'react-icons/ai';
import {
	FaCameraRetro,
	FaTabletAlt,
	FaObjectGroup,
	FaPencilRuler,
} from 'react-icons/fa';
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
									<FaCameraRetro />
									<span>Videographer</span>
								</li>
								<li>
									<FaPencilRuler />
									<span>Graphic Designer</span>
								</li>
								<li>
									<AiOutlineScissor />
									<span>Cutter</span>
								</li>
								<li>
									<FaObjectGroup />
									<span>UX-Design</span>
								</li>
								<li>
									<FaTabletAlt />
									<span>App-Development</span>
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
