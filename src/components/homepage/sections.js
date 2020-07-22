import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import UiAnimation from './uianimation';
import Progressring from './ProgressRing';
import IconCode from '../../images/content/code.svg';
import IconTools from '../../images/content/tools.svg';
import IconVisualz from '../../images/content/visualz.svg';
import Textblock from './textblock';
import Showreel from '../../images/content/showreel.mp4';
import ShowreelPoster from '../../images/content/showreel-poster.jpg';
import { Parallax } from 'react-scroll-parallax';

import './sections.scss';
import 'animate.css/animate.css';

const Sections = () => {
	const { people, kiel, captor, code, screen } = useStaticQuery(graphql`
		query {
			people: file(relativePath: { eq: "content/image-people.png" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 540) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			kiel: file(relativePath: { eq: "content/image-kiel.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 405) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			captor: file(relativePath: { eq: "content/image-captor.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 540) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
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
		<section id='sections'>
			<Container>
				{/* SECTION 1 */}
				<Row className='web-row'>
					<Col md={6}>
						<Textblock
							title='Digitale Tools'
							text='Die Bandbreite an digitalen Tools, die uns auf der Welt zur Verfügung stehen ist groß. Und das finden wir super! Denn wir lieben es digitale Werkzeuge effektiv einzusetzen, 
            sodass Ideen und Fantasien keine Grenzen bei der Umsetzung gesetzt sind. Wir mischen Kreativität mit Fähigkeiten im Web Design, der Bewegtbildproduktion und unserem ständigen Drang ausdrucksvolle Projekte für Dich zu erstellen. Damit verstehen wir uns als Produzenten in einer wachsenden Omni-Channel-Welt. '
							icon={IconTools}
						/>
						{/* <div className='section-car'>
							<Img
								fluid={car.childImageSharp.fluid}
								alt=''
								className='image-car'
							/>
						</div> */}
						<UiAnimation />
					</Col>

					<Col md={6}>
						<Img
							className='image-people'
							fluid={people.childImageSharp.fluid}
							alt='people'
						/>
					</Col>
				</Row>

				<hr class='hr' />

				<Row>
					<Col md={4} className='centercol'>
						<Textblock
							title='Web'
							text='Wir entwickeln dir deine Website nach den neusten Web-Technologie Standards. Responsives Design, hohe Geschwindigkeit und user-zentriertes Design resultieren in bester Performance und hohem Google Ranking. Genauso wichtig sind uns sicheres Hosting und einfaches Content Management, damit du die Kontrolle über deine Inhalte besitzt.'
							icon={IconCode}
						/>
					</Col>
					<Col md={8}>
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

				<hr className='hr' />

				{/* SECTION 2 */}
				<Row className='media-row'>
					<Col md={{ size: 6, order: 2 }}>
						<Textblock
							title='Media'
							text="Videos und Bilder bieten ganz besonders viel Potenzial für Excytement! Hier geht's um Feeling, Authentizität und Einzigartigkeit. Um das zu erreichen, bieten wir das volle Spektrum an Produktionsdienstleistungen an. Das beginnt bei der Konzeption, geht über die Produktion und den Schnitt und endet beim Ausrollen des Resultats über verschiedene Kanäle."
							icon={IconVisualz}
						/>
						<Img
							className='image-right'
							fluid={kiel.childImageSharp.fluid}
							alt=''
							style={{ width: '75%' }}
						/>
					</Col>
					<Col md={{ size: 6, order: 1 }}>
						<video
							className='showreel'
							preload='auto'
							loop={true}
							playsInline
							autoPlay
							muted
							src={Showreel}
							poster={ShowreelPoster}
						></video>
						<Img
							className='image-middle'
							fluid={captor.childImageSharp.fluid}
							alt=''
						/>
					</Col>
				</Row>

				{/* SECTION 3 */}
			</Container>
		</section>
	);
};

export default Sections;
