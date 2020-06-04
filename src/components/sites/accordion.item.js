import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlineArrowDown } from 'react-icons/ai';

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <li>
          <Accordion.Toggle
            className='acc-title'
            variant='link'
            eventKey={this.props.eventKey}
          >
            {this.props.title}
            <AiOutlineArrowDown className='acc-icon' />
          </Accordion.Toggle>
          <Accordion.Collapse className='text' eventKey={this.props.eventKey}>
            <>
              <div className='text'>{this.props.text}</div>
            </>
          </Accordion.Collapse>
        </li>
      </>
    );
  }
}
export default AccordionItem;
