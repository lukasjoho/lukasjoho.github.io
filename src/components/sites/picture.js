import React from 'react';
import './picture.scss';
import { Col, Row, Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css/animate.css';

const Picture = () => {
	const { main } = useStaticQuery(graphql`
		query {
			main: file(relativePath: { eq: "content/image-client.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<section className='picture'>
			<Container>
				<Row>
					<Col md={12}>
						<div className='main'>
							<Img fluid={main.childImageSharp.fluid} />
							<div className='text'>
								<h1>'Ne nice CX</h1>

								<p>
									Eine gute Customer Experience im gesamten Projektverlauf ist
									uns wichtig und selbstverständlich.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Picture;
