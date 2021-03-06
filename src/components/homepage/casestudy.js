import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './casestudy.scss';
import 'animate.css/animate.css';
import ImageSiemensCase from '../../images/content/image-siemens-case.jpg';
import ImageVscode from '../../images/content/image-vscode.png';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'gatsby-plugin-intl';

const Casestudy = () => {
	return (
		<section className='casestudy'>
			<Container>
				<Row></Row>
				<Row>
					<Col md={2}></Col>

					<Col md={8}>
						<div className='main'>
							<Link to='/case-studies/siemens-ai'>
								<div className='case'>
									<div className='client'>
										<Parallax y={[0, 0]} x={[5, -5]} tagOuter='figure'>
											<h1>Siemens</h1>
										</Parallax>
									</div>
									<img className='main-image' src={ImageSiemensCase} alt='' />
									<div className='overlay'></div>
									<div className='image'>
										<Parallax y={[10, -10]} x={[-5, 5]} tagOuter='figure'>
											<img src={ImageVscode} alt='' />
										</Parallax>
									</div>
									<div className='description'>
										<Parallax y={[-10, 25]} x={[0, -0]} tagOuter='figure'>
											<h1>Case Study</h1>
										</Parallax>
									</div>
								</div>
							</Link>
						</div>
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		</section>
	);
};

export default Casestudy;
