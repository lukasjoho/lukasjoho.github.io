import React, { Component } from 'react';
import './wireframes.scss';
import { ParallaxBanner } from 'react-scroll-parallax';
import ImageWireframes from '../../images/content/wireframes.jpg';

class Wireframes extends Component {
	render() {
		return (
			<section id='wireframes'>
				<ParallaxBanner
					className=''
					layers={[
						{
							image: `${ImageWireframes}`,
							amount: 0.6,
						},
					]}
					style={{
						height: '100%',
					}}
				></ParallaxBanner>
			</section>
		);
	}
}

export default Wireframes;
