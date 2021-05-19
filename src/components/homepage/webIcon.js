import React from 'react';
import './webicon.scss';

const WebIcon = props => {
	return (
		<div className='web-icon'>
			<div className='icon'>{props.icon}</div>
			<p>{props.text}</p>
		</div>
	);
};
export default WebIcon;
