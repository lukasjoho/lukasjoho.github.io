import React from 'react';
import './jubel.scss';
import { Col, Row, Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.css';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const Jubel = () => {
	const { jubel } = useStaticQuery(graphql`
		query {
			jubel: file(relativePath: { eq: "content/kiel-jubel.jpg" }) {
				childImageSharp {
					fluid(quality: 60, maxWidth: 370) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<section id='jubel'>
			<Container>
				<Row>
					<Col xs={0} md={2}></Col>
					<Col xs={7} md={5}>
						<Img fluid={jubel.childImageSharp.fluid} alt='' />
					</Col>
					<Col xs={5} md={5} className='center-col'>
						<div className='rectangle'></div>
						<div className='text'>
							<ScrollAnimation animateIn='animate__fadeInLeft'>
								<h1>
									Nur <br />
									Gemeinsam
									<br />
									Wird's
									<br />
									Gut
								</h1>
							</ScrollAnimation>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Jubel;
