import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './hero.scss';
import Particles from 'react-particles-js';
import 'animate.css/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const textArray = ['ideate', 'create', 'build', 'excyte'];

class Hero extends Component {
	constructor() {
		super();
		this.state = { textIdx: 0 };
	}

	componentDidMount() {
		this.timeout = setInterval(() => {
			let currentIdx = this.state.textIdx;
			this.setState({ textIdx: currentIdx + 1 });
		}, 1500);
	}

	componentDidUnmount() {
		clearInterval(this.timeout);
	}

	render() {
		let textThatChanges = textArray[this.state.textIdx % textArray.length];

		return (
			<section id='hero'>
				<div className='hero-container'>
					<Container>
						<div className='container-center'>
							<ScrollAnimation
								animateIn='animate__fadeInUpTitle'
								duration='1.5'
							>
								<h1>
									we <span className='stroke'>{textThatChanges}</span>
								</h1>
							</ScrollAnimation>
						</div>
					</Container>
					<Particles
						height={350}
						params={{
							particles: {
								number: {
									value: 20,
								},
								size: {
									value: 1,
								},
							},
						}}
					/>
				</div>
			</section>
		);
	}
}

export default Hero;
