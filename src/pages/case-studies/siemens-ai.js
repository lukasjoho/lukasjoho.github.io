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
						<Col xs={12} lg={7}>
							<h2>Die Umsetzung</h2>
							<h3>Blitzschnelle Ladezeiten</h3>
							<p>
								Die neue Website haben wir mit dem Komponenten basierten
								Javascript Framework Gatsby gebaut. Dies ermöglichte uns die
								Erstellung von Seiten mit schnellstmöglicher Ladezeit. Lange
								unübersichtliche Seiten konnten dadurch auf mehrere kürzere
								Unterseiten gesplittet werden.
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={7}>
							<div>
								<h3>Gleiches Design, aber besser</h3>

								<p>
									Um die Siemens Corporate Identity beizubehalten, haben wir das
									Siemens interne Design Theme, basierend auf dem CSS Framework
									Bootstrap, in die neue Website eingebaut. Designelemente und
									Funktionen, welche mit der alten Technologie nicht umsetzbar
									waren, haben wir CI gerecht neu überdacht, designed und
									animiert. <br />
									<br />
									Eine neue Statusleiste der „Innovation Journey“ Seite führt
									Besucher nun elegant und übersichtlich durch die einzelnen
									Prozesse, welche jedes Kundenprojekt durchläuft. Sie basiert
									auf der derzeitigen Scrollposition des Nutzers und bietet
									jetzt, anders als vorher, auch für mobile Geräte eine tolle
									Experience.
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
								Die von uns eingebauten Markdown-Dateien ergeben für die Website
								ein individualisiertes und funktionsspezifisches Content
								Management System. Texte, Bilder, Icons, Seiten und Verlinkungen
								können jetzt ganz einfach bearbeitet und hinzugefügt werden.
								Dazu braucht es keinen technischen Hintergrund und das Layout
								der Seite bleibt komplett unberührt. <br />
								<br />
								Inhalte wie z.B diese Texte über ein angebotenes Training können
								sehr intuitiv über Markdown Dateien geändert werden. Selbst
								Textformatierungen können über einfache Codierungen vorgenommen
								werden.
							</p>
						</Col>
						<Col className='images-mdx' xs={12} lg={11}>
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
							<h3>Kundenspezifisches Teilen von Inhalten</h3>
							<p>
								Um nur Projekte zu sehen, welche bestimmte Kriterien erfüllen,
								können diese im „Use Case Explorer“ über Dropdowns gefiltert
								werden. Mit einem Klick auf das jeweilige Projekt werden weitere
								Detailinformationen angezeigt. Die Filter werden in der URL der
								Seite gespeichert. Dadurch kann die vorgefilterte Seite per Link
								einfach an interessierte Kunden weitergeleitet werden.
							</p>
						</Col>
						<Col xs={12} lg={10}>
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
