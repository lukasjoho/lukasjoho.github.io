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
import WebIcon from './webIcon';

import IconDesign from '../../images/content/icons/icon-design.svg';
import IconCMS from '../../images/content/icons/icon-cms.svg';
import IconSeo from '../../images/content/icons/icon-seo.svg';
import IconFast from '../../images/content/icons/icon-fast.svg';
import IconHosting from '../../images/content/icons/icon-hosting.svg';
import IconCloudFunctions from '../../images/content/icons/icon-cloud-functions.svg';
import IconUsers from '../../images/content/icons/icon-users.svg';
import IconDatabase from '../../images/content/icons/icon-database.svg';
import IconScalability from '../../images/content/icons/icon-scalability.svg';
import IconPayment from '../../images/content/icons/icon-payment.svg';
import IconZahnrad from '../../images/content/icons/icon-zahnrad.svg';
import IconGlobe from '../../images/content/icons/icon-globe.svg';
import Build from './build';

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
			<Build />
			{/* SECTION 1 */}
			<Container>
				{/* <Row>
					<Col md={6}>
						<Textblock
							title='Digitale Tools'
							text='Die Bandbreite an digitalen Tools, die uns auf der Welt zur Verfügung stehen ist groß. Und das finden wir super! Denn wir lieben es digitale Werkzeuge effektiv einzusetzen, 
            sodass Ideen und Fantasien keine Grenzen bei der Umsetzung gesetzt sind. Wir mischen Kreativität mit Fähigkeiten im Web Design, der Bewegtbildproduktion und unserem ständigen Drang ausdrucksvolle Projekte für Dich zu erstellen. Damit verstehen wir uns als Produzenten in einer wachsenden Omni-Channel-Welt. '
							icon={IconTools}
						/>
						<UiAnimation className='ui-animation' />
					</Col>

					<Col md={6}>
						<Img
							className='image-people'
							fluid={people.childImageSharp.fluid}
							alt='people'
						/>
					</Col>
				</Row> */}

				{/* <hr class='hr' /> */}

				<Row>
					<Col md={4} className='centercol'>
						<Textblock
							title='Web'
							text='Wir entwickeln dir deine Website oder Web-App nach den neusten und zukunftssichersten Web-Technologie Standards.'
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
				<section id='web-spacer'>
					<div className='image-code-wrapper'>
						<Img
							className='image-code'
							fluid={code.childImageSharp.fluid}
							alt=''
						/>
					</div>
					<div className='spacer-rect'>
						<img className='icons globe' src={IconGlobe} alt='' />

						<img className='icons zahnrad' src={IconZahnrad} alt='' />
					</div>
				</section>
				<Row className='web'>
					<Col className='col-with-margin' md={5}>
						<div className='web-panel web-site'>
							<h3>Website</h3>
							<Row>
								<Col md={6}>
									<WebIcon icon={IconCMS} text='einfaches CMS' />
								</Col>
								<Col md={6}>
									<WebIcon icon={IconDesign} text='Custom Design' />
								</Col>
								<Col md={6}>
									<WebIcon icon={IconFast} text='Schnelle Ladezeiten' />
								</Col>
								<Col md={6}>
									<WebIcon icon={IconSeo} text='SEO & Analytics' />
								</Col>
							</Row>
						</div>
					</Col>
					<Col md={7}>
						<div className='web-panel web-app'>
							<h3>Web-App</h3>
							<Row>
								<Col md={4}>
									<WebIcon icon={IconDatabase} text='Schnelle Datenbanken' />
								</Col>
								<Col md={4}>
									<WebIcon icon={IconCloudFunctions} text='Cloud Functions' />
								</Col>
								<Col md={4}>
									<WebIcon icon={IconPayment} text='Payment Integration' />
								</Col>
								<Col md={4}>
									<WebIcon icon={IconUsers} text='User-Authorisierung' />
								</Col>
								<Col md={4}>
									<WebIcon icon={IconHosting} text='sicheres Hosting' />
								</Col>
								<Col md={4}>
									<WebIcon icon={IconScalability} text='Skalierbarkeit' />
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				{/* <Row>
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
				</Row> */}

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
