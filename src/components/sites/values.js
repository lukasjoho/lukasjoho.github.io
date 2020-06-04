import React from 'react';
import './values.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFastForward } from 'react-icons/fi';
import { MdReplay, MdSettingsInputComponent } from 'react-icons/md';
import { FaClipboardCheck } from 'react-icons/fa';

const Values = () => (
	<section id='values'>
		<Container>
			<div className='title'>
				<h2>Unsere Werte</h2>
				<span>Die Zusammenarbeit mit uns</span>
			</div>
			<Row>
				<Col md={6} className='value'>
					<div className='icon'>
						<FiFastForward />
					</div>
					<h3>Motivation</h3>
					<p>
						Unsere Motivation: Kunden die froh sind, über das was wir kreieren!
						Nur wenn der Kunde zufrieden ist, sind wir es auch!
					</p>
				</Col>

				<Col md={6} className='value'>
					<div className='icon'>
						<MdReplay />
					</div>
					<h3>Erfahrung</h3>
					<p>
						Das Portfolio wächst und wächst. Verschiedenste Projekte in Film,
						Foto, Design und Branding aus den Bereichen Sport, Musik, Business
						und Event entstehen in eigener Sache, in Unternehmen, auf Festivals
						und im Sportbereich.
					</p>
				</Col>

				<Col md={6} className='value'>
					<div className='icon'>
						<MdSettingsInputComponent />
					</div>
					<h3>Team-Work</h3>
					<p>
						Wir arbeiten im Team. Jeder mit seinem Spezialgebiet. Aus einem
						breiten Netzwerk schöpfen wir zudem zusätzlich Know-How und können
						so auf jeden Wunsch eingehen und eng mit unserem Kunden
						zusammenarbeiten.
					</p>
				</Col>

				<Col md={6} className='value'>
					<div className='icon'>
						<FaClipboardCheck />
					</div>
					<h3>Customization</h3>
					<p>
						Bei uns bekommt jedes Projekt seine ganz eigene Behandlung und volle
						Konzentration. Mit zuverlässigem Service und transparenter Umsetzung
						behält der Kunde immer den Durchblick und Projektstatus.
					</p>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Values;
