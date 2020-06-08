import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBox from '../components/homepage/parallaxbox';
import Layout from '../components/general/layout';
import SEO from '../components/seo';
import Banner from '../components/homepage/banner';
import Sections from '../components/homepage/sections';
import Hero from '../components/homepage/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/pointer.scss';

class IndexPage extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<ParallaxProvider>
				<Layout>
					<SEO
						title='excyted | Creative Studio und Filmproduktion'
						description='Als eine hybride Werbeproduktion entwickeln wir kreative Lösungen für deine Marke, dein Unternehmen oder dein Projekt. Mit Dir wollen wir excyten und deine individuellen Projekte Wirklichkeit werden lassen.'
					/>
					<Hero />
					<Banner />
					<ParallaxBox />
					<Sections />
				</Layout>
			</ParallaxProvider>
		);
	}
}

export default IndexPage;
