import React from 'react';
import AccordionBody from './accordion.body';
import { Row, Col } from 'react-bootstrap';
import {
	AiOutlineDesktop,
	AiOutlineCloudServer,
	AiOutlineYoutube,
} from 'react-icons/ai';
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
							<AiOutlineDesktop />
							<h2>Frontend</h2>
						</div>
						<ul>
							<AccordionBody
								title1='Branding'
								text1='Je nach Bedarf stellen wir eine Branding-Session an den Anfang
								Darin schärfen und definieren wir die Marke, damit wir mit klarer Linie in den Design-Prozess starten können.'
								title2='UI/UX Design'
								text2='In einer kreativen, agilen Phase werden User-Probleme identifiziert und durch Design gelöst. Das User-Involvement wird bestimmt, die Funktionalität wird perfektioniert und es wird eine starke Verbindung zwischen Customer und Produkt geschaffen.'
								title3='Javascript Framework'
								text3='Wir programmieren mit ReactJS und den darauf basierenden Frameworks "Gatsby" und "Next". Damit erzielen wir für unsere Websites und Web-Apps blitzschnelle Ladezeiten, individuelle Features und endlose Skalierbarkeit.'
							/>
						</ul>
					</Col>
					<Col md={4}>
						<div className='service-title'>
							<AiOutlineCloudServer />
							<h2>Backend</h2>
						</div>
						<ul>
							<AccordionBody
								title1='Backend'
								text1='Für die komplette Backend-Infrastruktur einer Web-App setzen wir auf die Google Cloud Plattform inklusive Firebase. So können wir innerhalb kürzester Zeit Datenbanken, Autorisierungen, Funktionen, Builds und Hosting aufsetzen.'
								title2='3rd Party Services'
								text2='Wir können Services aller Art in die Web-App integrieren. Darunter: Zahlungssysteme wie Stripe, CMS wie Contentful und CRM-Systeme wie ActiveCampaign.'
								title3='CI/CD-Pipeline'
								text3='Durch eine, auch für den Kunden, transparente CI/CD-Pipeline lassen sich bestehende Software-Versionen modifizieren. Das erlaubt eine kontinuierliche Weiterentwicklung der Web-App mit Entwicklungs- , Release- und Validierungs-Zyklen.'
							/>
						</ul>
					</Col>
					<Col md={4}>
						<div className='service-title'>
							<AiOutlineYoutube />
							<h2>Media</h2>
						</div>
						<ul>
							<AccordionBody
								title1='Film'
								text1='Teil unseres Leistungsangebots ist die Produktion von Werbespots und Videos, die daraufhin einwandfrei in das Web-Projekt integriert werden können.'
								title2='Foto'
								text2='Integraler Bestandteil jeder Website sind website-spezifische Fotos. Im Design-Prozess erarbeiten wir Potenziale für Fotos, die wir daraufhin umsetzen können.'
								title3='Motion Design'
								text3='Wir sind fest davon überzeugt, dass individuelle abgestimmte Animationen auf modernen Websites essentiell sind um eine User-Experience zu bieten die sich natürlich anfühlt.'
							/>
						</ul>
					</Col>
				</Row>
			</section>
		);
	}
}
export default ServicesAccordion;
