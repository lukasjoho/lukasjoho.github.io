import React from 'react';
import { Helmet } from 'react-helmet';

export const wrapPageElement = ({ element, props }) => {
	return (
		<>
			<Helmet>
				{/* Cookiebot */}
				<script
					id='Cookiebot'
					src='https://consent.cookiebot.com/uc.js'
					data-cbid='0d57ddfe-1dc2-42d1-aa72-ea23f3ec4115'
					data-blockingmode='auto'
					type='text/javascript'
				></script>

				{/* Google Tag Manager */}
				<script
					src={(function(w, d, s, l, i) {
						w[l] = w[l] || [];
						w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
						var f = d.getElementsByTagName(s)[0],
							j = d.createElement(s),
							dl = l != 'dataLayer' ? '&l=' + l : '';
						j.async = true;
						j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
						f.parentNode.insertBefore(j, f);
					})(window, document, 'script', 'dataLayer', 'GTM-TFFB83Z')}
				/>
			</Helmet>
			{element}

			{/* Google Tag Manager (noscript)*/}
			<noscript>
				<iframe
					src='https://www.googletagmanager.com/ns.html?id=GTM-TFFB83Z'
					height='0'
					width='0'
					style='display:none;visibility:hidden'
				></iframe>
			</noscript>
		</>
	);
};
