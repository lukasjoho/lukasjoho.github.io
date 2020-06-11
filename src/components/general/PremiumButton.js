import React from 'react';
import PropTypes from 'prop-types';
import './PremiumButton.css';
import { Link } from 'gatsby';

const PremiumButton = props => {
	return (
		<Link to={props.to} className='premium-button'>
			<span className='module'>{props.text}</span>
		</Link>
	);
};

PremiumButton.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default PremiumButton;
