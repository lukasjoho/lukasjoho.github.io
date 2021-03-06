import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlineArrowDown } from 'react-icons/ai';

const AccordionItem = ({ eventKey, title, text }) => {
	return (
		<>
			<li>
				<Accordion.Toggle
					className='acc-title'
					variant='link'
					eventKey={eventKey}
				>
					{title}
					<AiOutlineArrowDown className='acc-icon' />
				</Accordion.Toggle>
				<Accordion.Collapse className='text' eventKey={eventKey}>
					<>
						<div className='text'>{text}</div>
					</>
				</Accordion.Collapse>
			</li>
		</>
	);
};
export default AccordionItem;
