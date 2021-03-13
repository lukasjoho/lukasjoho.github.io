import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Header from './header';
import './layout.css';
import '../styles.scss';
import Contact from './contact';
import { Helmet } from 'react-helmet';
import ContactModal from './ContactModal';

const Layout = props => {
	const [modalShow, setModalShow] = useState(false);
	const handleModal = bool => {
		setModalShow(bool);
	};
	return (
		<>
			<Header openModal={() => handleModal(true)} />
			<Helmet>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
				/>
			</Helmet>
			<ContactModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				handleModalClose={() => handleModal(false)}
			/>
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
