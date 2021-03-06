import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../components/general/layout';
import SEO from '../components/seo';
import Services from '../components/sites/linkedin-ad/web/services';
import Hero from '../components/sites/linkedin-ad/web/hero';
import PremiumButton from '../components/general/PremiumButton';
import Button from '../components/general/Button';
import buttonStyle from '../components/sites/linkedin-ad/buttons.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import MyModal from '../components/general/modal';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
	const [modalShow, setModalShow] = useState(false);
	const openModal = () => {
		console.log('triggered!');
		setModalShow(true);
	};

	return (
		<ParallaxProvider>
			<Layout>
				<SEO
					title='Web Development'
					description='Maximale Online Performance durch modernes Web Development.'
				/>
				<Hero />
				<Container className={buttonStyle.container}>
					<Row className={buttonStyle.centerrow}>
						<Col className={buttonStyle.buttonContainer}>
							<PremiumButton
								text='Projekt starten'
								modal
								openModal={openModal}
							/>
							<Button to='/' text='Zu Excyted' />
						</Col>
					</Row>
				</Container>
				<Services />
				<Container className={buttonStyle.container}>
					<Row className={buttonStyle.centerrow}>
						<Col className={buttonStyle.buttonContainer}>
							<PremiumButton
								text='Projekt starten'
								modal
								openModal={openModal}
							/>
							<Button to='/' text='Zu Excyted' />
						</Col>
					</Row>
				</Container>

				<MyModal show={modalShow} onHide={() => setModalShow(false)} />
			</Layout>
		</ParallaxProvider>
	);
};

export default IndexPage;
