import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Col, Container, Row } from 'react-bootstrap';
import { useIntl } from 'gatsby-plugin-intl';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStaticQuery, graphql } from 'gatsby';

const PrivacyPolicy = () => {
	const { locale } = useIntl();

	const query = useStaticQuery(
		graphql`
			query {
				allContentfulLegal(filter: { slug: { eq: "privacy-policy" } }) {
					nodes {
						title
						richText {
							json
						}
						node_locale
					}
				}
			}
		`
	);

	const node = query.allContentfulLegal.nodes
		.filter(node => node.node_locale === locale)
		.pop();

	return (
		<Layout>
			<SEO title={node.title} robots='noindex' />
			<section id='legal'>
				<Container>
					<Row>
						<Col md={9}>{documentToReactComponents(node.richText.json)}</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default PrivacyPolicy;
