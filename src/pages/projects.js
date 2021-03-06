import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Container, Row } from 'react-bootstrap';
import Project from '../components/sites/project';
import { useIntl } from 'gatsby-plugin-intl';

const Projects = ({ data }) => {
	const intl = useIntl();
	const { edges } = data.allContentfulProject;
	const projectArray = edges.map(edge => {
		return (
			<Project
				key={edge.node.id}
				data={edge.node}
				images={edge.node.images ? edge.node.images : ''}
			/>
		);
	});

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
			edges {
				node {
					title
					category
					type
					id
					description {
						json
					}
					photo {
						fluid(quality: 80, maxWidth: 690) {
							...GatsbyContentfulFluid
						}
					}
					video
					images {
						id
						fluid(quality: 80, maxWidth: 740) {
							...GatsbyContentfulFluid
						}
					}
					instagram
					vimeo
				}
			}
		}
	}
`;

export default Projects;
