import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import Clients from '../components/sites/clients';
import ServicesComponent from '../components/sites/services';

const Services = () => (
	<Layout>
		<SEO title='Leistungen' description='So setzen wir unsere Projekte um.' />
		<ServicesComponent />
		<Clients />
	</Layout>
);

export default Services;
