import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBox from '../components/homepage/parallaxbox';
import Layout from '../components/general/layout';
import SEO from '../components/seo';
import Banner from '../components/homepage/banner';
import Sections from '../components/homepage/sections';
import Hero from '../components/homepage/hero';
import Fireworks from '../components/homepage/fireworks';
import Casestudy from '../components/homepage/casestudy';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from '../components/general/modal';

const IndexPage = () => {
	return (
		<ParallaxProvider>
			<Layout>
				<SEO
					title='Creative Digital Studio'
					description='Excyted entwickelt digitale Produkte um deine Marke, dein Unternehmen oder dein Projekt in der Web- und Medienwelt nach vorne zu bringen. Lass dich excyten. Excyte andere.'
				/>
				{/* <Fireworks /> */}
				<Hero />
				<Casestudy />
				<Banner />
				<ParallaxBox />
				<Sections />
			</Layout>
		</ParallaxProvider>
	);
};

export default IndexPage;
