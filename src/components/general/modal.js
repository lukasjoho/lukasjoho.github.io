import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import IconMail from '../../images/icon-mail.svg';
// import IconPhone from '../../images/icon-phone.svg';
import './modal.scss';
const MyModal = props => {
	return (
		<Modal {...props} centered className='modal' size='lg'>
			<div className='dialog'>
				<Modal.Header>
					<h1>Reach Out to Us!</h1>
				</Modal.Header>
				<Modal.Body>
					<div className='contacts first-child'>
						<h2>
							<a href='tel:+491779767078'>+49 177 9767078</a>
						</h2>
					</div>
					{/* <h3>or drop us a message.</h3> */}
					<div className='contacts '>
						<h2>
							<a href='mailto:info@excyted.io'>info@excyted.io</a>
						</h2>
					</div>
				</Modal.Body>
			</div>
		</Modal>
	);
};
export default MyModal;
