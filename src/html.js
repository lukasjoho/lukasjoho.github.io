import React from 'react';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0 viewport-fit=cover'
				/>

				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
                        (function(w, d, s, l, i) {
								w[l] = w[l] || [];
								w[l].push({
									'gtm.start': new Date().getTime(),
									event: 'gtm.js',
								});
								var f = d.getElementsByTagName(s)[0],
									j = d.createElement(s),
									dl = l != 'dataLayer' ? '&l=' + l : '';
								j.async = true;
								j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
								f.parentNode.insertBefore(j, f);
							})(window, document, 'script', 'dataLayer', 'GTM-TFFB83Z')
                        `,
					}}
				/>

				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div
					key={`body`}
					id='___gatsby'
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>

				{props.postBodyComponents}

				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-TFFB83Z'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
			</body>
		</html>
	);
}