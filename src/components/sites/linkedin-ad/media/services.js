import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import Style from '../services.module.scss';

const Services = () => (
	<section id={Style.services}>
		<ParallaxProvider>
			<Container>
				<Row className={Style.row}>
					<Col
						md={6}
						style={{
							paddingBottom: '2.5rem',
						}}
					>
						<div className={Style.service}>
							<h3>Film</h3>
							<p>
								Wir produzieren Werbespots, Aftermovies und Social Media Content
								in vielen Bereichen, darunter: Business, Sport, Musik und
								Technologie.
							</p>
						</div>
					</Col>
					<Col md={6} style={{ paddingBottom: '2.5rem' }}>
						<div className={Style.service}>
							<h3>Foto</h3>
							<p>
								Ob Fotos für die Website, für das Unternehmen, das neue Projekt
								oder alles zusammen, wir erstellen Dir genau die Fotos die Du
								brauchst.
							</p>
						</div>
					</Col>
					<Col md={6} className={Style.budget}>
						<div className={Style.service}>
							<h3>Motion Graphics</h3>
							<p>
								Wir sind fest davon überzeugt, dass Motion Graphics eine immer
								größere Rolle im Bewegtbild spielen wird. Texte und Elemente
								perspektivisch eingefügt ins Video, können die Kirsche auf der
								Torte sein.
							</p>
						</div>
					</Col>
					<Col md={6}>
						<div className={Style.service}>
							<h3>Graphic Design</h3>
							<p>
								Hier machen wir dein Anliegen durch die Kombination aus Bild,
								Farbe, Formen und Typographie durch die neusten digitalen Tools
								visuell erkennbar.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</ParallaxProvider>
	</section>
);

export default Services;
