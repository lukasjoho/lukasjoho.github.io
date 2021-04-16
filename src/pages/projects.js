import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Container, Row } from 'react-bootstrap';
import Project from '../components/sites/project';
import { useIntl } from 'gatsby-plugin-intl';

const Projects = ({ data }) => {
	const intl = useIntl();
	const { nodes } = data.allContentfulProject;
	const projectArray = nodes
		.filter(node => node.node_locale === intl.locale)
		.map(node => (
			<Project
				key={node.id}
				data={node}
				images={node.images ? node.images : ''}
			/>
		));

	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'projects.seo.title' })}
				description={intl.formatMessage({ id: 'projects.seo.description' })}
			/>
			<section className='projects'>
				<Container>
					<Row>{projectArray}</Row>
				</Container>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query MyQuery {
		allContentfulProject(sort: { fields: order, order: DESC }) {
			nodes {
				node_locale
				title
				category
				type
				id
				description {
					json
				}
				photo {
					fluid(quality: 80, maxWidth: 690) {
						...GatsbyContentfulFluid_withWebp
					}
				}
				video
				images {
					id
					fluid(quality: 80, maxWidth: 740) {
						...GatsbyContentfulFluid_withWebp
					}
				}
				instagram
				vimeo
			}
		}
	}
`;

export default Projects;
