import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './fireworks.scss';
import './animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Fireworks extends Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			animation: '',
		};
	}
	componentDidMount() {
		setInterval(() => {
			setTimeout(() => this.setState({ animation: 'animate-tada' }), 1000);
		}, 2000);
	}
	render() {
		return (
			<section id='fireworks'>
				<div className='pyro'>
					<div class='before'></div>
					<div class='after'></div>
				</div>
				<div className='text '>
					<h1 id='fireworks-h1' ref={this.ref} className={'animate-tada'}>
						Happy New Year!
					</h1>
					<h2 className='animate-heart'>This year, we excyte together!</h2>
				</div>
			</section>
		);
	}
}

export default Fireworks;
