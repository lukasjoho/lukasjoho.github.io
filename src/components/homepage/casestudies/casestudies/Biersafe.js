import React from 'react';
import { Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import 'animate.css/animate.css';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'gatsby-plugin-intl';
import '../casestudy.scss';

const Biersafe = () => {
	const { imageBiersafe, imageShopify } = useStaticQuery(
		graphql`
			query {
				imageBiersafe: file(
					relativePath: { eq: "content/image-biersafe-shop.jpg" }
				) {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
				imageShopify: file(relativePath: { eq: "content/image-biersafe.png" }) {
					childImageSharp {
						fluid(quality: 70, maxWidth: 400) {
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
					<Link to='/case-studies/biersafe'>
						<div className='case'>
							<div className='image biersafe'>
								{/* <Parallax y={[10, -10]} x={[-5, 5]} tagOuter='figure'> */}
								<Img
									fluid={imageShopify.childImageSharp.fluid}
									alt='Biersafe Produkt'
								/>
								{/* </Parallax> */}
							</div>
							<div className='category'>
								{/* <Parallax y={[-10, 25]} x={[0, -0]} tagOuter='figure'> */}
								<h1>E-Commerce</h1>
								{/* </Parallax> */}
							</div>

							<Img
								className='main-image'
								fluid={imageBiersafe.childImageSharp.fluid}
								alt='Screenshot Website'
							/>

							<div className='overlay'></div>
							<div className='client'>
								{/* <Parallax y={[0, 0]} x={[5, -5]} tagOuter='figure'> */}
								<h1>Biersafe</h1>
								{/* </Parallax> */}
							</div>
						</div>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Biersafe;
