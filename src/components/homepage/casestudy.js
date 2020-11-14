import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './casestudy.scss';
import 'animate.css/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import ImageSiemensCase from '../../images/content/image-siemens-case.jpg';
import ImageVscode from '../../images/content/image-vscode.png';
import { Parallax } from 'react-scroll-parallax';

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
								<div className='client'>
									<Parallax y={[0, 0]} x={[10, -10]} tagOuter='figure'>
										<h1>Siemens</h1>
									</Parallax>
								</div>

								<img src={ImageSiemensCase} alt='' />
								<div className='overlay'></div>
							</div>
							<div className='image'>
								<Parallax y={[10, -10]} x={[-10, 10]} tagOuter='figure'>
									<img src={ImageVscode} alt='' />
								</Parallax>
							</div>
							<Parallax y={[-10, 25]} x={[0, -0]} tagOuter='figure'>
								<h1 className='description'>Case Study</h1>
							</Parallax>
						</Col>
						<Col md={2}></Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Casestudy;
