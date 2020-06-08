import * as React from 'react';

import { useDencrypt } from 'use-dencrypt-effect';
import './usedencrypt.scss';

const values = [
	'wir sind neugierig',
	'erzähl uns deine story',
	'meet the Team',
];

const UseDencrypt = () => {
	const { result } = useDencrypt();

	React.useEffect(() => {
		let i = 0;
		function crypting() {
			dencrypt(values[i]);
			i = i === values.length - 1 ? 0 : i + 1;
		}
		crypting();
		setInterval(crypting, 3000);

		// const action = setInterval(() => {
		//   dencrypt(values[i]);

		//   i = i === values.length - 1 ? 0 : i + 1;
		// }, 2500);

		// return () => clearInterval(action);
	}, []);

	return (
		<div id='usedencrypt'>
			<h2>{result}</h2>
		</div>
	);
};
export default UseDencrypt;
