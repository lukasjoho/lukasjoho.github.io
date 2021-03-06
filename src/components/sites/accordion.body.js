import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from './accordion.item';

const AccordionBody = ({ title1, title2, title3, text1, text2, text3 }) => {
	return (
		<Accordion>
			<AccordionItem title={title1} text={text1} eventKey='1' />
			<AccordionItem title={title2} text={text2} eventKey='2' />
			<AccordionItem title={title3} text={text3} eventKey='3' />
		</Accordion>
	);
};
export default AccordionBody;
