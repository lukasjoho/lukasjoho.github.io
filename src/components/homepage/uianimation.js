import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './uianimation.scss';

class UiAnimation extends React.Component {
	render() {
		return (
			<section id='uianimation'>
				<ScrollAnimation
					animateIn='animate__flipInX'
					duration={1}
					delay='0'
					animateOnce={true}
				>
					<div className='frame'>
						<div className='frame-top'></div>
						<div className='frame-bottom'>
							<div className='bottom-left'>
								<div className='balken'></div>

								<div className='balken'></div>

								<div className='balken'></div>

								<div className='balken'></div>
							</div>

							<div className='bottom-right'>
								<div className='right-fill'></div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='animate__fadeIn'
					duration={0.3}
					delay={200}
					animateOnce={true}
				>
					<div className='square-container'>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration={0.2}
							delay={400}
							animateOnce={true}
						>
							<div className='square'></div>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration={0.2}
							delay={600}
							animateOnce={true}
						>
							<div className='square'></div>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration={0.2}
							delay={800}
							animateOnce={true}
						>
							<div className='square'></div>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__zoomIn'
							duration={0.2}
							delay={1000}
							animateOnce={true}
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
