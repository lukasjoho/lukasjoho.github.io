import React from 'react';
import './clients.scss';
import { Row, Col, Container } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';

import dockland from '../../images/clients/dockland.png';
import harvard from '../../images/clients/harvard.png';
import liba from '../../images/clients/liba.png';
import biersafe from '../../images/clients/biersafe.png';
import grampp from '../../images/clients/grampp.png';
import idealab from '../../images/clients/idealab.png';
import ihk from '../../images/clients/ihk.png';
import ingolstadt from '../../images/clients/ingolstadt.png';
import kiel from '../../images/clients/kiel.png';
import muensterland from '../../images/clients/muensterland.png';
import stadtmuenster from '../../images/clients/stadtmuenster.png';
import s4s from '../../images/clients/s4s.png';
import yomaro from '../../images/clients/yomaro.png';
import wwubaskets from '../../images/clients/wwubaskets.png';
import jaworskyj from '../../images/clients/jaworskyj.png';
import ottogroup from '../../images/clients/ottogroup.png';

const Clients = () => (
	<section id='clients'>
		<Container>
			<div className='title'>
				<h2>
					<FormattedMessage id='services.clients.title' />
				</h2>
				<span>
					<FormattedMessage id='services.clients.subtitle' />
				</span>
			</div>
			<Row className='client-logo-container'>
				<Col md={6} className='client-logo-wrapper'>
					<img src={idealab} alt='' />
					<img src={liba} alt='' />
					<img src={s4s} alt='' />
					<img src={harvard} alt='' />
				</Col>
				<Col md={6} className='client-logo-wrapper'>
					<img src={kiel} alt='' />
					<img src={ingolstadt} alt='' />
					<img src={stadtmuenster} alt='' />
					<img src={muensterland} alt='' />
				</Col>
				<Col md={6} className='client-logo-wrapper'>
					<img src={wwubaskets} alt='' />
					<img src={ottogroup} alt='' />
					<img src={yomaro} alt='' />
					<img src={ihk} alt='' />
				</Col>
				<Col md={6} className='client-logo-wrapper'>
					<img src={jaworskyj} alt='' />
					<img src={grampp} alt='' />
					<img src={dockland} alt='' />
					<img src={biersafe} alt='' />
				</Col>
			</Row>
		</Container>
	</section>
);

export default Clients;
