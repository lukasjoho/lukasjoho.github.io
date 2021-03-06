import React from 'react';
import './picture.scss';
import { Col, Row, Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';
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
								<h1>
									<FormattedMessage id='services.picture.title' />{' '}
								</h1>
								<p>
									<FormattedMessage id='services.picture.text' />
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
