import React from 'react';
import AccordionBody from './accordion.body';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineAppstore } from 'react-icons/ai';
import { MdShowChart } from 'react-icons/md';
import './accordion.scss';

class ServicesAccordion extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section id='accordion'>
				<Row className='services-with-icons'>
					<Col md={4}>
						<div className='service-title'>
							<AiOutlineEye />
							<h2>Visuals</h2>
						</div>
						<ul>
							<AccordionBody
								title1='Film'
								text1='Wir produzieren Werbespots, Aftermovies und Social Media Content in vielen Bereichen, darunter: Business, Sport, Musik und Technologie.'
								title2='Foto'
								text2='Ob Fotos für die Website, für das Unternehmen, das neue Projekt oder alles zusammen,'
								title3='Motion Graphics'
								text3='Wir sind fest davon überzeugt, dass Motion Graphics eine immer größere Rolle im Bewegtbild spielen wird. Texte und Elemente perspektivisch eingefügt ins Video, können die Krische auf der Torte sein.  '
								title4='Graphic Design'
								text4='Hier machen wir dein Anliegen durch die Kombination aus Bild, Farbe, Formen und Typographie durch die neusten digitalen Tools visuell erkennbar.'
							/>
						</ul>
					</Col>
					<Col md={4}>
						<div className='service-title'>
							<AiOutlineAppstore />
							<h2>Web</h2>
						</div>
						<ul>
							<AccordionBody
								title1='UX/UI Design'
								text1='Vor dem Entwickeln einer Web Applikation oder Website sketchen und designen wir. So sind beide Seiten effizienter und agiler in der kreativen Phase bevor die Website tatsächlich
								entwickelt wird.'
								title2='Prototyping'
								text2='Wir kreieren einen Klick-Dummie der geplanten Web App, um das zukünftige Ergebnis schonmal vorab auf User Experience zu testen.'
								title3='Development'
								text3='Damit unsere Web Applikationen bestmögliche Performance erzielen, basieren wir die Programmierung auf federleichtem Javascript. Wir bauen Content Management Systems manuell ein und behalten so maximale Kontrolle über das Produkt.'
								title4='Hosting/Deployment'
								text4='Nicht zu vernachlässigen ist das richtige Hosting auf schnellen, sicheren und einfach zu wartenden Servern damit sowohl du als auch deine User die bestmögliche User Experience erleben.'
							/>
						</ul>
					</Col>
					<Col md={4}>
						<div className='service-title'>
							<MdShowChart />
							<h2>Brand</h2>
						</div>
						<ul>
							<AccordionBody
								title1='Content'
								text1='Damit der produzierte Content auch die richtige Leute zur richtigen Zeit erwischt bedarf es einer Content Strategie. Hier geht es um Personas, User/Viewer Journeys und Trendanalysen.'
								title2='Corporate Identity'
								text2='Die Corporate Identity ist dein Kommunikationskonzept nach außen. Sie bestimmt wesentlich die Persönlichkeit deiner Brand und sollte im Einklang mit den einzelnen Kommunikationsaktivitäten stehen.'
								title3='Social Media'
								text3='Die Produktion von webfähigen Produkten ist nur die halbe Miete. Das Kommunizieren des Ergebnisses über die richtigen Social Media Kanäle bestimmt maßgeblich das Engagement mit deiner Brand.'
								title4='Positioning'
								text4='Du möchtest das deine Brand in einer bestimmten Art und Weise wahrgenommen wird. Vor der Produktion von Inhalten überlegen wir uns deshalb gemeinsam, wie diese deine Brand überhaupt darstellen sollen.'
							/>
						</ul>
					</Col>
				</Row>
			</section>
		);
	}
}
export default ServicesAccordion;
