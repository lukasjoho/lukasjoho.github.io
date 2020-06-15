import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../components/general/layout';
import SEO from '../components/seo';
import Services from '../components/sites/linkedin-ad/web/services';
import Hero from '../components/sites/linkedin-ad/web/hero';
import PremiumButton from '../components/general/PremiumButton';
import Button from '../components/general/Button';
import buttonStyle from '../components/sites/linkedin-ad/buttons.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {
	render() {
		return (
			<ParallaxProvider>
				<Layout>
					<SEO
						title='Webentwicklung'
						description='Maximale Online Performance durch moderne Webentwickling.'
					/>
					<Hero />
					<Container className={buttonStyle.container}>
						<Row className={buttonStyle.centerrow}>
							<Col className={buttonStyle.buttonContainer}>
								<PremiumButton to='/' text='Zu excyted' />
								<Button
									to='mailto:info@excyted.io'
									text='Sende uns eine Email'
								/>
							</Col>
						</Row>
					</Container>
					<Services />
					<Container className={buttonStyle.container}>
						<Row className={buttonStyle.centerrow}>
							<Col className={buttonStyle.buttonContainer}>
								<PremiumButton to='/' text='Zu excyted' />
								<Button
									to='mailto:info@excyted.io'
									text='Sende uns eine Email'
								/>
							</Col>
						</Row>
					</Container>
				</Layout>
			</ParallaxProvider>
		);
	}
}

export default IndexPage;
