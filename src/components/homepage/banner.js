import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import './banner.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import Triangle from '../../images/content/triangle.svg';
import Dots from '../../images/content/dots.png';
import Rectangles from './rectangles';
import { Link } from 'gatsby';

const Banner = () => {
	const { logo, whu, code } = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "banner/logo.png" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 540) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			whu: file(relativePath: { eq: "content/whu.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 506) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			code: file(relativePath: { eq: "content/code1.png" }) {
				childImageSharp {
					fluid(quality: 40, maxWidth: 200) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`);

	return (
		<section id='banner'>
			<Container>
				<Row className='no-padding-top'>
					<Col md={6} className='banner-text'>
						<div className='typewriter-container'>
							<h2 className='typewriter'>Brand. Digital. and Motion.</h2>
						</div>
						<Img
							fluid={logo.childImageSharp.fluid}
							alt='Logo'
							className='banner-logo'
							imgStyle={{ objectFit: 'contain' }}
						/>

						<h3>
							Als Creative Studio entwickeln wir <br /> State-of-the-Art
							Lösungen <br />
							und kreative Produkte <br />
							für die digitale Welt.
						</h3>

						{/* <p>
							Als hybride Medienproduktion entwickeln wir kreative Lösungen für
							deine Marke, dein Unternehmen oder dein Projekt. Mit excyted
							bringen wir unsere Disziplinen aus Web Development und der
							Produktion von Medien zusammen und können so nicht nur
							konzeptionell sondern auch technisch eng mit Dir an deiner Idee
							basteln. <br /> Bock zu excyten?
							<br />
							Let's get in touch!{' '}
						</p> */}
						<Link to='/projects' className='premium-button'>
							<span className='module'>Unsere Projekte</span>
						</Link>
					</Col>
					<Col md={6} className='parallaxfull'>
						<div className='parallax-stack'>
							<div>
								<Parallax y={[0, 0]} x={[0, 10]} tagOuter='figure'>
									<div className='imgequi'>
										<img src={Dots} alt='' className='dots' />
									</div>
								</Parallax>
							</div>
							<div>
								<Parallax y={[0, -20]} x={[-20, -20]} tagOuter='figure'>
									<Img
										fluid={code.childImageSharp.fluid}
										alt=''
										className='code1'
										imgStyle={{ objectFit: 'contain' }}
									/>
								</Parallax>
							</div>
							<div>
								<Parallax y={[0, 10]} x={[0, -10]} tagOuter='figure'>
									<Img
										fluid={whu.childImageSharp.fluid}
										alt=''
										imgStyle={{ objectFit: 'contain' }}
										className='opacity3'
									/>
								</Parallax>
							</div>
							<div>
								<Parallax y={[0, 20]} x={[0, -20]} tagOuter='figure'>
									<Img
										fluid={whu.childImageSharp.fluid}
										alt=''
										imgStyle={{ objectFit: 'contain' }}
										className='opacity2'
									/>
								</Parallax>
							</div>
							<div>
								<Parallax y={[0, 30]} x={[0, -30]} tagOuter='figure'>
									<Img
										fluid={whu.childImageSharp.fluid}
										alt=''
										imgStyle={{ objectFit: 'contain' }}
										className='opacity1'
									/>
								</Parallax>
							</div>
							<div>
								<Parallax y={[0, 40]} x={[0, -40]} tagOuter='figure'>
									<Img
										fluid={whu.childImageSharp.fluid}
										imgStyle={{ objectFit: 'contain' }}
										alt=''
										className='front-image'
									/>
								</Parallax>
							</div>

							<div>
								<Parallax y={[0, 50]} x={[0, -50]} tagOuter='figure'>
									<img src={Triangle} alt='' />
								</Parallax>
							</div>
							<div className='heighter'></div>
						</div>
					</Col>
				</Row>
			</Container>
			<hr className='hr' />
			<Rectangles />
		</section>
	);
};

export default Banner;
