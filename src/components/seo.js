import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
// import { useLocation } from "@reach/router"

function SEO({ title, description, image, robots, url }) {
	// const { pathname } = useLocation()
	const { site, file } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						defaultTitle: title
						defaultDescription: description
						siteUrl
						lang
					}
				}
				file(relativePath: { eq: "favicon.svg" }) {
					childImageSharp {
						fixed {
							defaultImage: src
						}
					}
				}
			}
		`
	);

	const { defaultTitle, defaultDescription, siteUrl, lang } = site.siteMetadata;

	const { defaultImage } = file.childImageSharp.fixed;

	// Remove leading double slashes (//) from contentful source link received by graphql query
	let modifiedImageUrl;
	if (image) {
		// if contentful asset
		if (image.startsWith('//images.ctfassets.net')) {
			modifiedImageUrl = image.replace(/^\/\//, 'http://');
		}
		// if static asset
		else {
			modifiedImageUrl = `${siteUrl}${image}`;
		}
	}

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: modifiedImageUrl || `${siteUrl}${defaultImage}`,
		siteUrl: url || siteUrl,
		robots: robots || 'all',
	};

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${defaultTitle}`}
		>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta
				name='google-site-verification'
				content='HMruL3I2pItCeZy-kcZkKeiOgbCmoMaWYFsrZpxtd7Q'
			/>

			{seo.robots && <meta name='robots' content={seo.robots} />}

			{seo.siteUrl && <meta property='og:url' content={seo.siteUrl} />}

			{seo.title && <meta property='og:title' content={seo.title} />}

			{seo.description && (
				<meta property='og:description' content={seo.description} />
			)}

			{seo.image && <meta property='og:image' content={seo.image} />}

			<meta name='twitter:card' content='summary_large_image' />

			{seo.title && <meta name='twitter:title' content={seo.title} />}

			{seo.description && (
				<meta name='twitter:description' content={seo.description} />
			)}

			{seo.image && <meta name='twitter:image' content={seo.image} />}
		</Helmet>
	);
}

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
};

SEO.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	image: PropTypes.string,
	robots: PropTypes.string,
};

export default SEO;
