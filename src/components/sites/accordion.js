import React from 'react';
import AccordionBody from './accordion.body';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineAppstore } from 'react-icons/ai';
import { MdShowChart } from 'react-icons/md';
import './accordion.scss';

class ServicesAccordion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id='accordion'>
        <Row className='services-with-icons'>
          <Col md={4}>
            <div className='service-title'>
              <AiOutlineEye />
              <h2>Visuals</h2>
            </div>
            <ul>
              <AccordionBody
                title1='Film'
                text1='FilmText...'
                title2='Foto'
                text2='FotoText...'
                title3='Motion Graphics'
                text3='MGtext...'
                title4='Graphic Design'
                text4='GraphicsText...'
              />
            </ul>
          </Col>
          <Col md={4}>
            <div className='service-title'>
              <AiOutlineAppstore />
              <h2>Web</h2>
            </div>
            <ul>
              <AccordionBody
                title1='UX/UI Design'
                text1='UXText'
                title2='Prototyping'
                text2='ProtoText...'
                title3='Development'
                text3='DevText'
                title4='Hosting/Deployment'
                text4='HDTExt...'
              />
            </ul>
          </Col>
          <Col md={4}>
            <div className='service-title'>
              <MdShowChart />
              <h2>Brand</h2>
            </div>
            <ul>
              <AccordionBody
                title1='Content'
                text1='ContentText...'
                title2='Corporate Identity'
                text2='CIText...'
                title3='Social Media'
                text3='SMtext...'
                title4='Positioning'
                text4='PosText...'
              />
            </ul>
          </Col>
        </Row>
      </section>
    );
  }
}
export default ServicesAccordion;
