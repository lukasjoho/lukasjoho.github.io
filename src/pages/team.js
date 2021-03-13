import React from 'react';
import Layout from '../components/general/layout';
import SEO from '../components/seo';
import Values from '../components/sites/values';
import Members from '../components/sites/members';
import Jubel from '../components/sites/jubel';
import { useIntl } from 'gatsby-plugin-intl';

const Team = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'team.seo.title' })}
				description={intl.formatMessage({ id: 'team.seo.description' })}
			/>
			<Members />
			<Jubel />
			<Values />
		</Layout>
	);
};

export default Team;
