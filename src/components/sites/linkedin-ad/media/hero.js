import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Showreel from '../../../../images/content/showreel.mp4';
import ShowreelPoster from '../../../../images/content/showreel-poster.jpg';
import Textblock from '../../../homepage/textblock';
import { AiOutlineMobile } from 'react-icons/ai';
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLogoBuffer } from 'react-icons/io';
import { IoIosLock } from 'react-icons/io';
import { IoLogoGoogle } from 'react-icons/io';
import { IoIosColorPalette } from 'react-icons/io';

import '../hero.scss';
import 'animate.css/animate.css';

const Sections = () => {
	const { kiel, captor } = useStaticQuery(graphql`
		query {
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
		}
	`);

	return (
		<section id='linkedin'>
			<Container>
				<Row>
					<Col>
						<div className='web-heading'>
							<h1>Full Service Medienproduktion</h1>
							<h2>Für maximales Feeling.</h2>
						</div>
					</Col>
				</Row>
				<Row className='web-values'>
					<Col md={4} sm={6} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={100}
							animateOnce={true}
						>
							<div>
								<AiOutlineMobile className='icon' />
								<h4>Werbespot</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={200}
							animateOnce={true}
						>
							<div>
								<IoIosSpeedometer className='icon' />
								<h4>Social Media Content</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={300}
							animateOnce={true}
						>
							<div>
								<IoLogoBuffer className='icon' />
								<h4>Animationen</h4>
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
								<IoLogoGoogle className='icon' />
								<h4>Fotos</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={6}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration='1'
							delay={500}
							animateOnce={true}
						>
							<div>
								<IoIosColorPalette className='icon' />
								<h4>Luftaufnahmen</h4>
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
								<h4>Corporate / Brand Film</h4>
							</div>
						</ScrollAnimation>
					</Col>
				</Row>
				<Row>
					<Col md={{ size: 6, order: 2 }}>
						<Textblock
							title='Moderne Medienproduktion'
							text="Videos und Bilder bieten ganz besonders viel Potenzial für Excytement! Hier geht's um Feeling, Authentizität und Einzigartigkeit. Um das zu erreichen, bieten wir das volle Spektrum an Produktionsdienstleistungen an. Das beginnt bei der Konzeption, geht über die Produktion und den Schnitt und endet beim Ausrollen des Resultats über verschiedene Kanäle."
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
			</Container>
		</section>
	);
};

export default Sections;
