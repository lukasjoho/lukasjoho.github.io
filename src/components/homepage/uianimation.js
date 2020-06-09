import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './uianimation.scss';

class UiAnimation extends React.Component {
	render() {
		return (
			<section id='uianimation'>
				<ScrollAnimation
					animateIn='animate__flipInX'
					duration='1'
					delay='500'
					animateOnce='true'
				>
					<div class='frame'>
						<ScrollAnimation
							animateIn='animate__fadeIn'
							duration='0.5'
							delay='1000'
							animateOnce='true'
						>
							<div className='frame-top'></div>
						</ScrollAnimation>
						<div class='frame-bottom'>
							<div class='bottom-left'>
								<ScrollAnimation
									animateIn='animate__fadeIn'
									duration='0.5'
									delay='1100'
									animateOnce='true'
								>
									<div className='balken'></div>
								</ScrollAnimation>
								<ScrollAnimation
									animateIn='animate__fadeIn'
									duration='0.5'
									delay='1200'
									animateOnce='true'
								>
									<div className='balken'></div>
								</ScrollAnimation>
								<ScrollAnimation
									animateIn='animate__fadeIn'
									duration='0.5'
									delay='1300'
									animateOnce='true'
								>
									<div className='balken'></div>
								</ScrollAnimation>
								<ScrollAnimation
									animateIn='animate__fadeIn'
									duration='0.5'
									delay='1400'
									animateOnce='true'
								>
									<div className='balken'></div>
								</ScrollAnimation>
							</div>
							<div class='bottom-right'>
								<ScrollAnimation
									animateIn='animate__fadeIn'
									duration='1'
									delay='1500'
									animateOnce='true'
								>
									<div class='right-fill'></div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='animate__fadeIn'
					duration='0.3'
					delay='1600'
					animateOnce='true'
				>
					<div className='square-container'>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration='0.3'
							delay='1700'
							animateOnce='true'
						>
							<div className='square'></div>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration='0.3'
							delay='1800'
							animateOnce='true'
						>
							<div className='square'></div>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration='0.3'
							delay='1900'
							animateOnce='true'
						>
							<div className='square'></div>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration='0.3'
							delay='2000'
							animateOnce='true'
						>
							<div className='square'></div>
						</ScrollAnimation>
					</div>
				</ScrollAnimation>
			</section>
		);
	}
}

export default UiAnimation;
