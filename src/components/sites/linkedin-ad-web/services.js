import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import Style from './services.module.scss';

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
							<h3>1. UX/UI Design</h3>
							<p>
								Vor dem Entwickeln einer Web Applikation oder Website sketchen
								und designen wir. So sind beide Seiten effizienter und agiler in
								der kreativen Phase bevor die Website tatsächlich entwickelt
								wird.
							</p>
						</div>
					</Col>
					<Col md={6} style={{ paddingBottom: '2.5rem' }}>
						<div className={Style.service}>
							<h3>2. Prototyping</h3>
							<p>
								Wir erstellen einen Prototyp der geplanten Web App, um das
								zukünftige Ergebnis schonmal vorab auf User Experience zu
								testen.
							</p>
						</div>
					</Col>
					<Col md={6} className={Style.budget}>
						<div className={Style.service}>
							<h3>3. Development</h3>
							<p>
								Damit unsere Web Applikationen bestmögliche Performance
								erzielen, basieren wir die Programmierung auf federleichtem
								Javascript. Wir bauen Content Management Systems manuell ein und
								behalten so maximale Kontrolle über das Produkt.
							</p>
						</div>
					</Col>
					<Col md={6}>
						<div className={Style.service}>
							<h3>4. Hosting / Deployment</h3>
							<p>
								Nicht zu vernachlässigen ist das richtige Hosting auf schnellen,
								sicheren und einfach zu wartenden Servern damit sowohl Du als
								auch deine User die bestmögliche User Experience erleben.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</ParallaxProvider>
	</section>
);

export default Services;
