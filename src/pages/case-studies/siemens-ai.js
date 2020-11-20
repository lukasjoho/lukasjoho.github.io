import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/general/layout';
import { Container, Row, Col } from 'react-bootstrap';
import Iphone from '../../components/general/iphone';

import Img from 'gatsby-image';

import '../../components/sites/casestudy.scss';

const Siemens = () => {
	const {
		imageImac,
		imageDropdown,
		imageMdxCode,
		imageMdxPage,
	} = useStaticQuery(graphql`
		query {
			imageImac: file(relativePath: { eq: "content/image-imac.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			imageMdxPage: file(relativePath: { eq: "content/image-mdx-page.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 850) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			imageMdxCode: file(relativePath: { eq: "content/image-mdx-code.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 740) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			imageDropdown: file(relativePath: { eq: "content/image-dropdown.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1100) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title='Siemens' description='Das haben wir bereits produziert.' />
			<section className='casepage' id='siemens'>
				<Container>
					<Row className='pb-hero'>
						<Col xs={12} lg={7}>
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

						<Col className='image-imac' xs={12}>
							<Img
								fluid={imageImac.childImageSharp.fluid}
								alt=''
								className='img-imac'
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={7}>
							<h2>Die Challenge</h2>
							<p>
								Die alte Seite von Siemens AI@CT basiert auf einer überholten
								Web-Architektur, die verschiedene Probleme mit sich bringt:
								<br />
								<ul>
									<li>Langsame Ladezeiten der einzelnen Seiten</li>
									<li>
										Kein responsives Verhalten bei unterschiedlichen
										Screen-Größen
									</li>
									<li>Umständliches Ändern von Website-Inhalten</li>
									<li>
										Gestaltungseinschränkungen durch Technologielimitierungen
									</li>
								</ul>
								<br />
								Um Trainings, Wissen und Prozesse von Siemens AI@CT intern
								darzustellen und zu verkaufen soll die aktuelle Seite neu
								entwickelt werden. Ein neues high-speed Web-Framework soll die
								Ladezeit der Seite perfektionieren und Editoren der Seite
								außerdem die Möglichkeit geben Inhalte einfach und schnell
								einzupflegen und anzupassen. Dafür soll ein indivduell
								angepasstes CMS in die Seite integriert werden.
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={7}>
							<h2>Die Umsetzung</h2>
							<h3>Blitzschnelle Ladezeiten</h3>
							<p>
								Die neue Website haben wir mit dem komponenten-basierten
								Javascript Framework Gatsby gebaut. Dies ermöglichte uns die
								Erstellung von Seiten mit schnellstmöglicher Ladezeit. Lange
								unübersichtliche Seiten konnten dadurch auf mehrere kürzere
								Unterseiten gesplittet werden.
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={7} className='d-flex align-items-center'>
							<div>
								<h3>Gleiches Design, aber besser</h3>

								<p>
									Um die Corporate Identity von Siemens beizubehalten, haben wir
									das siemens-interne Design-Theme, in die neue Website
									integriert. Designelemente und Funktionen, welche mit der
									alten Technologie nicht umsetzbar waren, haben wir CI gerecht
									neu überdacht, designed und animiert. <br />
									<br />
									Die neue Statusleiste führt Besucher nun übersichtlich durch
									die auf der Seite dargestellten Prozesse. Sie zeigt die
									aktuelle Scrollposition des Users und bietet jetzt, anders als
									vorher, auch auf mobilen Geräte eine nahtlose Experience.
								</p>
							</div>
						</Col>
						<Col lg={5} className='image-iphone'>
							<Iphone />
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={7} className='has-image'>
							<h3>Maßgeschneidertes Content Management System</h3>
							<p>
								Die von uns eingebauten Markdown-Dateien bilden ein
								individualisiertes und funktionsspezifisches Content Management
								System. Texte, Bilder, Icons, Seiten und Verlinkungen können
								damit ganz einfach bearbeitet und hinzugefügt werden. Dazu
								braucht es keinen technischen Hintergrund und die Funktion der
								Seite kann nicht ungewollt beeinträchtigt werden. <br />
								<br />
								Inhalte wie z.B diese Texte über ein angebotenes Training (rot
								markiert) können sehr intuitiv über Markdown-Dateien geändert
								werden. Textformatierungen, Metadaten und das Einfügen von
								Komponenten können über einfache Codierungen vorgenommen werden.
							</p>
						</Col>
						<Col className='images-mdx' xs={12} lg={10}>
							<Img
								className='mdx-page'
								fluid={imageMdxPage.childImageSharp.fluid}
								alt=''
							/>
							<Img
								className='mdx-code'
								fluid={imageMdxCode.childImageSharp.fluid}
								alt=''
								style={{ position: 'absolute' }}
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={7} className='has-image'>
							<h3>Filtering von Projekten</h3>
							<p>
								Über den „Use Case Explorer“ können Projekte nach mehreren
								Kriterien intelligent gefiltert und angezeigt werden. Mit einem
								Klick auf das jeweilige Projekt werden weitere
								Detailinformationen angezeigt. Die Seite greift dabei auf eine
								bereits bestehende interne API zurück, in der die Projekte
								hinterlegt sind.
							</p>
						</Col>
						<Col xs={12} lg={9}>
							<Img
								fluid={imageDropdown.childImageSharp.fluid}
								alt=''
								className='use-case-explorer'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Siemens;
