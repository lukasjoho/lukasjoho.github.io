import React from 'react';
import { Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import 'animate.css/animate.css';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'gatsby-plugin-intl';
import '../casestudy.scss';

const Siemens = () => {
	const { imageSiemens, imageCode } = useStaticQuery(
		graphql`
			query {
				imageSiemens: file(
					relativePath: { eq: "content/image-siemens-case.jpg" }
				) {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
				imageCode: file(relativePath: { eq: "content/image-vscode.png" }) {
					childImageSharp {
						fluid(quality: 10, maxWidth: 500) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
			}
		`
	);

	return (
		<div className='casestudy'>
			<Container>
				<div className='main'>
					<Link to='/case-studies/siemens-ai'>
						<div className='case'>
							<div className='image'>
								<Parallax y={[10, -10]} x={[-5, 5]} tagOuter='figure'>
									<Img fluid={imageCode.childImageSharp.fluid} alt='Code' />
								</Parallax>
							</div>
							<div className='category'>
								<Parallax y={[-10, 25]} x={[0, -0]} tagOuter='figure'>
									<h1>Intranetsite</h1>
								</Parallax>
							</div>
							<Img
								className='main-image'
								fluid={imageSiemens.childImageSharp.fluid}
								alt='Screenshot Website'
							/>
							<div className='overlay'></div>
							<div className='client'>
								<Parallax y={[0, 0]} x={[5, -5]} tagOuter='figure'>
									<h1>Siemens</h1>
								</Parallax>
							</div>
						</div>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Siemens;
