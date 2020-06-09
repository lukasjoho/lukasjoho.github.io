require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Excyted - We create`,
		description: `Als eine hybride Werbeproduktion entwickeln wir kreative Lösungen für deine Marke, dein Unternehmen oder dein Projekt. Unser Fokus liegt auf Qualität und individueller Zusammenarbeit.`,
		author: `@lukasjoho, @jaykch`,
		keywords: ['Werbeagentur', 'Filmproduktion', 'digital'],
		siteUrl: `http://excyted.io`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/imprint`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
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
				icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
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
