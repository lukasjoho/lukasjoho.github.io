import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from "gatsby"
import Footer from './footer';
import Header from './header';
import './layout.css';
import '../styles.scss';
import Contact from './contact';
import { Helmet } from 'react-helmet';
import MyModal from '../general/modal';

const Layout = props => {
	// const data = useStaticQuery(graphql`
	//   query SiteTitleQuery {
	//     site {
	//       siteMetadata {
	//         title
	//       }
	//     }
	//   }
	// `)
	const [modalShow, setModalShow] = useState(false);
	const [modalText, setModalText] = useState('demo');
	function openModal() {
		console.log('triggered!');
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
			<MyModal
				modaltext={modalText}
				show={modalShow}
				onHide={() => setModalShow(false)}
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
