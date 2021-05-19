import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBox from '../components/homepage/parallaxbox';
import Layout from '../components/general/layout';
import SEO from '../components/seo';
import Banner from '../components/homepage/banner';
import Sections from '../components/homepage/sections';
import Hero from '../components/homepage/hero';
import Casestudies from '../components/homepage/casestudies/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'focus-visible/dist/focus-visible.js';
import { useIntl } from 'gatsby-plugin-intl';

const IndexPage = () => {
	const intl = useIntl();
	return (
		<ParallaxProvider>
			<Layout>
				<SEO
					title='Technology Studio'
					description={intl.formatMessage({ id: 'home.seo.description' })}
				/>
				<Hero />
				<Casestudies />
				<Banner />
				<ParallaxBox />
				<Sections />
			</Layout>
		</ParallaxProvider>
	);
};

export default IndexPage;
