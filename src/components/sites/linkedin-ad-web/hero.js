import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Progressring from '../../homepage/ProgressRing';
import Textblock from '../../homepage/textblock';
import { Parallax } from 'react-scroll-parallax';
import { AiOutlineMobile } from 'react-icons/ai';
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLogoBuffer } from 'react-icons/io';
import { IoIosLock } from 'react-icons/io';
import { IoLogoGoogle } from 'react-icons/io';
import { IoIosColorPalette } from 'react-icons/io';

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
						<div className='web-heading'>
							<h1>Deine Website.</h1>
							<h2>Für maximale Online Performance.</h2>
						</div>
					</Col>
				</Row>
				<Row className='web-values'>
					<Col md={4} sm={6} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={200}
							animateOnce={true}
						>
							<div>
								<AiOutlineMobile className='icon' />
								<h4>Responsive Design</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={400}
							animateOnce={true}
						>
							<div>
								<IoIosSpeedometer className='icon' />
								<h4>Hohe Geschwindigkeit</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={600}
							animateOnce={true}
						>
							<div>
								<IoLogoBuffer className='icon' />
								<h4>Content Management System</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={600}
							animateOnce={true}
						>
							<div>
								<IoLogoGoogle className='icon' />
								<h4>Search Engine Optimization</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={600}
							animateOnce={true}
						>
							<div>
								<IoIosColorPalette className='icon' />
								<h4>Individuelle Gestaltung</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={600}
							animateOnce={true}
						>
							<div>
								<IoIosLock className='icon' />
								<h4>Verschlüsselt</h4>
							</div>
						</ScrollAnimation>
					</Col>
				</Row>
				<Row>
					<Col md={5} className='centercol'>
						<Textblock
							title='Moderne Webentwicklung'
							text='Wir entwickeln dir deine Website nach den neusten Web-Technologie Standards.
							Responsives Design, hohe Geschwindigkeit und user-zentriertes Design resultieren in bester Performance und hohem Google Ranking. Genauso wichtig sind uns sicheres Hosting und einfaches Content Management, damit du die Kontrolle über deine Inhalte besitzt.'
						/>
					</Col>
					<Col md={7}>
						<div className='macbook'>
							<div className='screen'>
								<div className='viewport'>
									<Parallax y={[0, -120]} tagOuter='figure'>
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
