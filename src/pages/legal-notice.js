import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Col, Container, Row } from 'react-bootstrap';
import { useIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl';

const Legal = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'legalNotice.seo.title' })}
				robots='noindex'
			/>
			<section id='legal'>
				<Container>
					<Row>
						<Col md={9}>
							<FormattedHTMLMessage id='legalNotice.legalNotice' />
						</Col>
					</Row>
				</Container>
			</section>
			<section id='privacy'>
				<Container>
					<Row>
						<Col md={9}>
							<FormattedHTMLMessage id='legalNotice.dataPrivacy' />
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Legal;
