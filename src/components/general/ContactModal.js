import React from 'react';
import { Modal } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { IoMdClose } from 'react-icons/io';
import './ContactModal.scss';

const ContactModal = ({ show, onHide, handleModalClose }) => {
	return (
		<>
			<Modal
				show={show}
				onHide={onHide}
				centered
				className='modal-contact'
				size='lg'
			>
				<button className='modal-close' onClick={() => handleModalClose()}>
					<IoMdClose />
				</button>
				<div className='dialog'>
					<Modal.Header>
						<h1>
							<FormattedMessage id='layout.navbar.modal.title' />
						</h1>
					</Modal.Header>
					<Modal.Body>
						<div className='contacts first-child'>
							<h2>
								<a href='tel:+491606111994'>+49 160 6111994</a>
							</h2>
						</div>
						<div className='contacts '>
							<h2>
								<a href='mailto:info@excyted.io'>info@excyted.io</a>
							</h2>
						</div>
					</Modal.Body>
				</div>
			</Modal>
		</>
	);
};
export default ContactModal;
