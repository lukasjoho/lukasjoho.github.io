import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { Link } from 'gatsby';

const Button = props => {
	if (props.to.startsWith('mailto')) {
		return (
			<a href={props.to} className='button'>
				<span className='module'>{props.text}</span>
			</a>
		);
	} else {
		return (
			<Link to={props.to} className='button'>
				<span className='module'>{props.text}</span>
			</Link>
		);
	}
};

Button.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Button;
