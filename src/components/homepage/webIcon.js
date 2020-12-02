import React from 'react';
import './webicon.scss';

const WebIcon = props => {
	return (
		<div className='web-icon'>
			<div className='image'>
				<img src={props.icon} alt='' />
			</div>
			<p>{props.text}</p>
		</div>
	);
};
export default WebIcon;
