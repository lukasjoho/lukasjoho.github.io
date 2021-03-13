import React from 'react';

import { useDencrypt } from 'use-dencrypt-effect';
import './usedencrypt.scss';

const UseDencrypt = ({ text }) => {
	const { result, dencrypt } = useDencrypt();

	React.useEffect(() => {
		let i = 0;
		function crypting() {
			dencrypt(text[i]);
			i = i === text.length - 1 ? 0 : i + 1;
		}
		crypting();
		const action = setInterval(crypting, 3000);

		// const action = setInterval(() => {
		//   dencrypt(values[i]);

		//   i = i === values.length - 1 ? 0 : i + 1;
		// }, 2500);

		return () => clearInterval(action);
	}, [dencrypt, text]);

	return (
		<div id='usedencrypt'>
			<h2>{result}</h2>
		</div>
	);
};
export default UseDencrypt;
