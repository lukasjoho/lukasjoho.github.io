import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IconDigitalLines from '../../images/content/icon-digital-lines.svg';
import './build.scss';
import ImageBuild from '../../images/content/build.jpg';
import ImagePosterBuild from '../../images/content/image-build-poster.jpg';
import VideoBuild from '../../images/content/video-build.mp4';

const Build = () => {
	return (
		<section id='build'>
			<Container>
				<Row>
					<Col lg={6} className='col-text order-lg-2'>
						<h2>
							We build
							<br />
							<span>your</span>
							<br />
							products
						</h2>
					</Col>
					<Col lg={6} className='col-video'>
						{/* <img src={ImageBuild} alt='' /> */}
						<video
							className='build-video'
							preload='auto'
							loop={true}
							playsInline
							autoPlay
							muted
							src={VideoBuild}
							poster={ImagePosterBuild}
						></video>
					</Col>
				</Row>
			</Container>
			<img className='lines' src={IconDigitalLines} alt='' />
		</section>
	);
};

export default Build;
