import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Header from './header';
import './layout.css';
import '../styles.scss';
import Contact from './contact';
import { Helmet } from 'react-helmet';
import ContactModal from '../general/modal';

const Layout = props => {
	const [modalShow, setModalShow] = useState(false);
	function openModal() {
		setModalShow(true);
	}
	return (
		<>
			<Header openModal={openModal} />
			<Helmet>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
				/>
			</Helmet>
			<ContactModal show={modalShow} onHide={() => setModalShow(false)} />
			<main>{props.children}</main>
			<Contact />
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
