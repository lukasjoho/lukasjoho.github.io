import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './why.scss';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.css';

class Why extends Component {
	constructor() {
		super();
	}

	componentDidMount() {}

	render() {
		return (
			<section id='why'>
				<h2 className='stroke'>WHY</h2>

				<h3>
					<span>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration={1.5}
							animateOnce={true}
							className='first-child'
						>
							Because You Want
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='animate__fadeInUp'
							duration={2.5}
							animateOnce={true}
							delay={200}
						>
							True Interactions
						</ScrollAnimation>
					</span>
				</h3>
			</section>
		);
	}
}

export default Why;
