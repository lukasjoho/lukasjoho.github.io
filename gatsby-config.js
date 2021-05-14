const path = require('path');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Excyted`,
		description: `Excyted entwickelt digitale Produkte um deine Marke, dein Unternehmen oder dein Projekt in der Web- und Medienwelt nach vorne zu bringen. Lass dich excyten. Excyte andere.`,
		keywords: ['Webentwicklung', 'Filmproduktion', 'digital'],
		siteUrl: `https://excyted.io`,
		lang: `de`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/legal-notice`],
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images\/content\/icons/,
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				'~': path.join(__dirname, 'src/'),
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Excyted - We create`,
				short_name: `Excyted`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#000`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/src/intl`,
				// supported language
				languages: [`de`, `en`],
				// language file path
				defaultLanguage: `de`,
				// option to redirect to `/de` when connecting `/`
				redirect: true,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `vbqynm9fw1dh`,
				accessToken: `CEvyIEQH95rHe-xInvPAqWbk-9-wgtJgwc2g9af8PPk`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
