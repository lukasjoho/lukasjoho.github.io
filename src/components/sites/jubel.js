import React from 'react';
import './jubel.scss';
import { Col, Row, Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.css';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { FormattedHTMLMessage } from 'gatsby-plugin-intl';

const Jubel = () => {
	const { jubel } = useStaticQuery(graphql`
		query {
			jubel: file(relativePath: { eq: "content/kiel-jubel.jpg" }) {
				childImageSharp {
					fluid(quality: 60, maxWidth: 370) {
						...GatsbyImageSharpFluid_withWebp_noBase64
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
							<ScrollAnimation
								animateIn='animate__fadeInLeft'
								animateOnce={true}
							>
								<h1>
									<FormattedHTMLMessage id='team.jubel' />
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
