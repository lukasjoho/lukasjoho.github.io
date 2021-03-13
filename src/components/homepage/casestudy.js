import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './casestudy.scss';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';
import 'animate.css/animate.css';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'gatsby-plugin-intl';

const Casestudy = () => {
	const { imageSiemens, imageCode } = useStaticQuery(
		graphql`
			query {
				imageSiemens: file(
					relativePath: { eq: "content/image-siemens-case.jpg" }
				) {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid_noBase64
						}
					}
				}
				imageCode: file(relativePath: { eq: "content/image-vscode.png" }) {
					childImageSharp {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid_noBase64
						}
					}
				}
			}
		`
	);

	return (
		<section className='casestudy'>
			<Container>
				<Row></Row>
				<Row>
					<Col md={2}></Col>

					<Col md={8}>
						<div className='main'>
							<Link to='/case-studies/siemens-ai'>
								<div className='case'>
									<div className='client'>
										<Parallax y={[0, 0]} x={[5, -5]} tagOuter='figure'>
											<h1>Siemens</h1>
										</Parallax>
									</div>
									<Img
										className='main-image'
										fluid={imageSiemens.childImageSharp.fluid}
										alt='Screenshot Website'
									/>
									<div className='overlay'></div>
									<div className='image'>
										<Parallax y={[10, -10]} x={[-5, 5]} tagOuter='figure'>
											<Img fluid={imageCode.childImageSharp.fluid} alt='Code' />
										</Parallax>
									</div>
									<div className='description'>
										<Parallax y={[-10, 25]} x={[0, -0]} tagOuter='figure'>
											<h1>Case Study</h1>
										</Parallax>
									</div>
								</div>
							</Link>
						</div>
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		</section>
	);
};

export default Casestudy;
