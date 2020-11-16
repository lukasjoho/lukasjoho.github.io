import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Container, Row } from 'react-bootstrap';
import Project from '../components/sites/project';

const Projects = ({ data }) => {
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
			<SEO title='Projekte' description='Das haben wir bereits produziert.' />
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
