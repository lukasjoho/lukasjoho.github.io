import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/general/layout';
import Clients from '../components/sites/clients';
import ServicesComponent from '../components/sites/services';
import { useIntl } from 'gatsby-plugin-intl';

const Services = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'services.seo.title' })}
				description={intl.formatMessage({ id: 'services.seo.description' })}
			/>

			<ServicesComponent />
			<Clients />
		</Layout>
	);
};

export default Services;
