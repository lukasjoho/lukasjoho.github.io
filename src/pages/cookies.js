import React, { useEffect, useRef } from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import { Col, Container, Row } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

const Cookies = () => {
	const intl = useIntl();
	const cookiesText = useRef();

	useEffect(() => {
		if (cookiesText.current) {
			const script = document.createElement('script');

			script.src =
				'https://consent.cookiebot.com/0d57ddfe-1dc2-42d1-aa72-ea23f3ec4115/cd.js';
			script.async = true;
			script.type = 'text/javascript';
			script.id = 'CookieDeclaration';

			cookiesText.current.appendChild(script);

			return () => {
				cookiesText.current.removeChild(script);
			};
		}
	}, [cookiesText]);

	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'cookies.seo.title' })}
				robots='noindex'
			/>

			<section id='cookies'>
				<Container>
					<Row>
						<Col md={9}>
							<h1>
								<FormattedMessage id='cookies.seo.title' />
							</h1>
							<div ref={cookiesText} />
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default Cookies;
