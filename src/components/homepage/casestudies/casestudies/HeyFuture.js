import React from 'react';
import { Container } from 'react-bootstrap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import 'animate.css/animate.css';
import { Link } from 'gatsby-plugin-intl';
import '../casestudy.scss';

const HeyFuture = () => {
	const { imageHeyFuture, imageCard } = useStaticQuery(
		graphql`
			query {
				imageHeyFuture: file(
					relativePath: { eq: "content/image-heyfuture.jpg" }
				) {
					childImageSharp {
						fluid(maxWidth: 800, quality: 90) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
				imageCard: file(
					relativePath: { eq: "content/image-heyfuture-card.png" }
				) {
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
					<Link to='/case-studies/heyfuture'>
						<div className='case'>
							<div className='image heyfuture'>
								{/* <Parallax y={[10, -10]} x={[-5, 5]} tagOuter='figure'> */}
								<Img
									fluid={imageCard.childImageSharp.fluid}
									alt='HeyFuture Swipe Card'
								/>
								{/* </Parallax> */}
							</div>
							<div className='category'>
								{/* <Parallax y={[-10, 25]} x={[0, -0]} tagOuter='figure'> */}
								<h1>App</h1>
								{/* </Parallax> */}
							</div>
							<div className='main-image-container'>
								<Img
									className='main-image'
									fluid={imageHeyFuture.childImageSharp.fluid}
									alt='Screenshot App'
								/>
								<div className='overlay'></div>
							</div>
							<div className='client'>
								{/* <Parallax y={[0, 0]} x={[5, -5]} tagOuter='figure'> */}
								<h1>HeyFuture</h1>
								{/* </Parallax> */}
							</div>
						</div>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default HeyFuture;
