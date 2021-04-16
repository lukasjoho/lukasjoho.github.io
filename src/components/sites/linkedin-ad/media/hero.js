import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Showreel from '../../../../images/content/showreel.mp4';
import ShowreelPoster from '../../../../images/content/showreel-poster.jpg';
import Textblock from '../../../homepage/textblock';
import { TiSocialInstagram } from 'react-icons/ti';
import { GiFilmStrip } from 'react-icons/gi';
import { IoIosBusiness } from 'react-icons/io';

import '../hero.scss';
import 'animate.css/animate.css';

const Sections = () => {
	const { kiel, captor } = useStaticQuery(graphql`
		query {
			kiel: file(relativePath: { eq: "content/image-kiel.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 405) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			captor: file(relativePath: { eq: "content/image-captor.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 540) {
						...GatsbyImageSharpFluid_withWebp_noBase64
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
							<h2>Ideen zum Ausdruck bringen.</h2>
						</div>
					</Col>
				</Row>
				<Row className='web-values'>
					<Col md={4} sm={12} xs={12}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration={1}
							delay={100}
							animateOnce={true}
						>
							<div>
								<GiFilmStrip className='icon' />
								<h4>Werbespot</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={12}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration={1}
							delay={200}
							animateOnce={true}
						>
							<div>
								<TiSocialInstagram className='icon' />
								<h4>Social Media Content</h4>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={4} xs={12}>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration={1}
							delay={300}
							animateOnce={true}
						>
							<div>
								<IoIosBusiness className='icon' />
								<h4>Corporate/Brand Film</h4>
							</div>
						</ScrollAnimation>
					</Col>
				</Row>
				<Row>
					<Col md={{ size: 6, order: 2 }}>
						<Textblock
							title='Kreation. Produktion.'
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
							aria-label='Showreel'
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
