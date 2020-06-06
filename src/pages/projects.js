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
				key={edge.node.title}
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
					description {
						json
					}
					photo {
						file {
							url
						}
					}
					video
					images {
						file {
							url
						}
					}
					instagram
				}
			}
		}
	}
`;

export default Projects;
