import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './casestudy.scss';
import 'animate.css/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ImageSiemensCase from '../../images/content/image-siemens-case.jpg';
import ImageVscode from '../../images/content/image-vscode.png';

class Casestudy extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className='casestudy'>
				<Container>
					<Row></Row>
					<Row>
						<Col md={2}></Col>

						<Col md={8} className='main'>
							<div className='case'>
								<h1 className='client'>Siemens</h1>

								<img src={ImageSiemensCase} alt='' />
								<div className='overlay'></div>
							</div>
							<div className='image'>
								<img src={ImageVscode} alt='' />
							</div>
							<h1 className='description'>Case Study</h1>
						</Col>
						<Col md={2}></Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Casestudy;
