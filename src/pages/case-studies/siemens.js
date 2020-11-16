import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';
import Layout from '../../components/general/layout';
import { Container, Row, Col } from 'react-bootstrap';
import ImageImac from '../../images/content/image-imac.png';
import Iphone from '../../components/general/iphone';
import ImageMdxCode from '../../images/content/image-mdx-code.png';
import ImageMdxPage from '../../images/content/image-mdx-page.jpg';
import ImageDropdown from '../../images/content/image-dropdown.jpg';
import '../../components/sites/casestudy.scss';

const Siemens = () => {
	return (
		<Layout>
			<SEO title='Siemens' description='Das haben wir bereits produziert.' />
			<section className='casepage' id='siemens'>
				<Container>
					<Row className='pb-hero'>
						<Col md={7}>
							<p className='label'>
								Case Study: <span>Web Development</span>
							</p>
							<h1>Siemens</h1>
							<p>
								Wir haben für Siemens ARTIFICIAL INTELLIGENCE @ CORPORATE
								TECHNOLOGY eine neue Intranetseite entwickelt. Sie dient der
								internen Kommunikation von Dienstleistungen und gibt den
								Bearbeitern der Website die Möglichkeit eigenständig und
								individuell Inhalte und Strukturen zu ändern.
							</p>
						</Col>

						<Col className='image-imac' md={12}>
							<img src={ImageImac} alt='' />
						</Col>
					</Row>
					<Row>
						<Col md={7}>
							<h2>Die Challenge</h2>
							<p>
								Die auf der Website basierende Technologie ist über die Zeit in
								die Jahre gekommen.
							</p>
							<br />
							<p>
								<strong>Die Hauptprobleme</strong>
							</p>
							<ul>
								<li>Langsame Ladezeiten der einzelnen Seiten</li>
								<li>
									Kein responsive Verhalten bei unterschiedlichen Screen-Größen
								</li>
								<li>
									Umständliches Ändern von Inhalten wie Texten und Bildern
								</li>
								<li>
									Gestaltungseinschränkungen durch Technologielimitierungen
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={7}>
							<h2>Die Umsetzung</h2>
							<h3>Blitzschnelle Ladezeiten</h3>
							<p>
								Die neue Website haben wir mit dem Komponenten basierten
								Javascript Framework Gatsby gebaut. Dies ermöglichte uns die
								Erstellung von Seiten mit schnellstmöglicher Ladezeit. Lange
								unübersichtliche Seiten konnten dadurch auf mehrere kürzere
								Unterseiten gesplittet werden.{' '}
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={7}>
							<div>
								<h3>Gleiches Design, aber besser</h3>

								<p>
									Das Siemens interne Design Theme, basierend auf dem CSS
									Framework Bootstrap, haben wir in die neue Website eingebaut,
									um die Siemens Corporate Identity beizubehalten.
									Designelemente und Funktionen, die mit der alten Technologie
									nicht möglich waren, haben wir CI gerecht neu überdacht,
									designed und animiert. Eine neue Statusleiste der „Innovation
									Journey“ Seite führt Besucher jetzt elegant und übersichtlich
									durch die einzelnen Prozesse die jedes Kundenprojekt
									durchläuft. Sie basiert auf der derzeitigen Scrollposition des
									Nutzers und bietet jetzt, anders als vorher, auch für mobile
									Geräte eine tolle Experience
								</p>
							</div>
						</Col>
						<Col lg={5} className='image-iphone'>
							<Iphone />
						</Col>
					</Row>
					<Row>
						<Col md={7} className='has-image'>
							<h3>Maßgeschneidertes Content Management System</h3>
							<p>
								Wir haben Markdown-Dateien genutzt um der Website ein
								individualisiertes und funktionsspezifisches Content Management
								System zu geben. Texte, Bilder, Icons, Seiten und Verlinkungen
								können jetzt ganz einfach bearbeitet und hinzugefügt werden.
								Dazu braucht es keinen technischen Hintergrund und das Layout
								der Seite bleibt komplett unberührt. Inhalte wie z.B diese Texte
								über ein angebotenes Training können sehr intuitiv über Markdown
								Dateien geändert werden. Selbst Textformatierungen können über
								einfache Codierungen vorgenommen werden.
							</p>
						</Col>
						<Col className='images-mdx' md={7}>
							<img className='mdx-page' src={ImageMdxPage} alt='' />
							<img className='mdx-code' src={ImageMdxCode} alt='' />
						</Col>
					</Row>
					<Row>
						<Col md={7} className='has-image'>
							<h3>Kundenspezifisches Teilen von Inhalten</h3>
							<p>
								Um bestimmte Projekte zu sehen, können diese über den Use Case
								Explorer nach vier Kriterien gefiltert werden. Mit einem Klick
								auf das jeweilige Projekt werden dann weitere
								Detailinformationen angezeigt. Die Filter werden in der URL der
								Seite gespeichert. Dadurch kann die vorgefilterte Seite per Link
								einfach an interessierte Kunden weitergeleitet werden.
							</p>
						</Col>
						<Col md={7}>
							<img src={ImageDropdown} alt='' />
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Siemens;
