import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from './accordion.item';

class AccordionBody extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Accordion>
				<AccordionItem
					title={this.props.title1}
					text={this.props.text1}
					eventKey='1'
				/>
				<AccordionItem
					title={this.props.title2}
					text={this.props.text2}
					eventKey='2'
				/>
				<AccordionItem
					title={this.props.title3}
					text={this.props.text3}
					eventKey='3'
				/>
			</Accordion>
		);
	}
}
export default AccordionBody;
