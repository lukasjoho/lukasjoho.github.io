import React, { Component } from 'react';
import './parallaxbox.scss';
import { ParallaxBanner } from 'react-scroll-parallax';
import ImageBackground from '../../images/content/parallaxbanner.jpg';
import ImageBoarderLeft from '../../images/content/parallaxboarderleft.png';
import ImageBoarderRight from '../../images/content/parallaxbanner-redbull-cropped.png';

class ParallaxBox extends Component {
	render() {
		return (
			<section id='parallaxbox'>
				<ParallaxBanner
					className='parallax-banner'
					layers={[
						{
							image: `${ImageBackground}`,
							amount: 0.2,
						},
						{
							image: `${ImageBoarderLeft}`,
							amount: 0,
						},
						{
							image: `${ImageBoarderRight}`,
							amount: -0.25,
						},
					]}
					style={{
						height: '100%',
					}}
				/>
			</section>
		);
	}
}

export default ParallaxBox;
