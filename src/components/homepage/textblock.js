import React from 'react';
import PropTypes from 'prop-types';
import Style from './textblock.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

class Textblock extends React.Component {
	render() {
		return (
			<div class={Style.textblock}>
				<div className={Style.iconsinline}>
					<div>
						<ScrollAnimation animateIn='animate__fadeInUp' animateOnce='true'>
							<h2>{this.props.title}</h2>
						</ScrollAnimation>
					</div>
					<ScrollAnimation
						animateIn='animate__fadeInBottomLeft'
						delay='200'
						animateOnce='true'
					>
						<img className={Style.icon} src={this.props.icon} alt='' />
					</ScrollAnimation>
				</div>
				<div>
					<ScrollAnimation animateIn='animate__fadeInUp' animateOnce='true'>
						<p>{this.props.text}</p>
					</ScrollAnimation>
				</div>
			</div>
		);
	}
}

Textblock.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
};

export default Textblock;
