import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Progressring from '../../homepage/ProgressRing';
import Textblock from '../../homepage/textblock';
import { Parallax } from 'react-scroll-parallax';

import './hero.scss';
import 'animate.css/animate.css';

const Sections = () => {
	const { code, screen } = useStaticQuery(graphql`
		query {
			code: file(relativePath: { eq: "content/image-code.png" }) {
				childImageSharp {
					fluid(quality: 20, maxWidth: 270) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			screen: file(relativePath: { eq: "content/screen.jpg" }) {
				childImageSharp {
					fluid(quality: 60, maxWidth: 550) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`);

	return (
		<section id='linkedin-web'>
			<Container>
				{/* SECTION 3 */}
				<Row>
					<Col>
						<h1>Wir erstellen dir deine schnelle Website</h1>
					</Col>
				</Row>
				<Row>
					<Col md={5} className='centercol'>
						<Textblock
							title='Langsame Website?'
							text='Eine Website hat mittlerweile jeder. Aber eine die schnell lädt, weit oben bei Google erscheint und alle Funktionen beinhaltet die Du brauchst hat nicht jeder. Das wollen wir ändern.
						Angefangen beim Entwickeln der grundsätzlichen Struktur deiner Seite und dem Design erstellen wir mit Dir gemeinsam eine ausdrucksvolle Website die Dich und deine Kunden excyted.'
						/>
					</Col>
					<Col md={7}>
						<div className='macbook'>
							<div className='screen'>
								<div className='viewport'>
									<Parallax y={[10, -120]} tagOuter='figure'>
										<Img
											className='screen-content'
											fluid={screen.childImageSharp.fluid}
											imgStyle={{ objectFit: 'contain' }}
										/>
									</Parallax>
								</div>
							</div>
							<div className='base'></div>
							<div className='notch'></div>
						</div>
					</Col>
				</Row>

				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<Img
							className='image-code'
							fluid={code.childImageSharp.fluid}
							alt=''
						/>
					</Col>
					<Col md={12} className='ring-container'>
						<div className='ring'>
							<ScrollAnimation
								animateIn='animate__fadeIn'
								duration='1'
								delay={0}
								animateOnce={true}
							>
								<Progressring
									radius='50'
									stroke='6'
									progress='94'
									text='Performance'
								/>
							</ScrollAnimation>
						</div>
						<div className='ring'>
							<ScrollAnimation
								animateIn='animate__fadeIn'
								duration='1'
								delay={200}
								animateOnce={true}
							>
								<Progressring
									radius='50'
									stroke='6'
									progress='92'
									text='Accessibility'
								/>
							</ScrollAnimation>
						</div>
						<div className='ring'>
							<ScrollAnimation
								animateIn='animate__fadeIn'
								duration='1'
								delay={400}
								animateOnce={true}
							>
								<Progressring
									radius='50'
									stroke='6'
									progress='100'
									text='Best Practice'
								/>
							</ScrollAnimation>
						</div>
						<div className='ring'>
							<ScrollAnimation
								animateIn='animate__fadeIn'
								duration='1'
								delay={600}
								animateOnce={true}
							>
								<Progressring
									radius='50'
									stroke='6'
									progress='100'
									text='SEO'
								/>
							</ScrollAnimation>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Sections;
