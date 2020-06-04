import React from 'react';
import './banner.scss';
import { Container, Row, Col } from 'react-bootstrap';
import PremiumButton from '../general/PremiumButton';
import logo from '../../images/banner/logo.png';
import { Parallax } from 'react-scroll-parallax';
import StackWhu from '../../images/content/whu.jpg';
import Triangle from '../../images/content/triangle.svg';
import Dots from '../../images/content/dots.png';
import Code1 from '../../images/content/code1.png';
import Rectangles from './rectangles';
import { Link } from 'gatsby';

const Banner = () => (
  <section id='banner'>
    <Container>
      <Row className='no-padding-top'>
        <Col md={6} className='banner-text'>
          <div className='typewriter-container'>
            <h2 className='typewriter'>Brand. Digital. and Motion.</h2>
          </div>
          <img src={logo} alt='Logo' className='banner-logo' />

          <h3>Creative Studio</h3>
          <p>
            Als eine hybride Medienproduktion entwickeln wir kreative Lösungen
            für deine Marke, dein Unternehmen oder dein Projekt. Mit excyted
            bringen wir unsere Disziplinen aus Web Development und der
            Produktion von Medien zusammen und können so nicht nur konzeptionell
            sondern auch technisch und grafisch eng mit dir an deiner Idee
            basteln. Bock zu excyten?
            <br />
            Let's get in touch!{' '}
          </p>
          <Link to='/projects' className='premium-button'>
            <span className='module'>Unsere Projekte</span>
          </Link>
        </Col>
        <Col md={6} className='parallaxfull'>
          <div className='parallax-stack'>
            <div>
              <Parallax y={[0, 0]} x={[0, 10]} tagOuter='figure'>
                <div className='imgequi'>
                  <img src={Dots} alt='' className='dots' />
                </div>
              </Parallax>
            </div>
            <div>
              <Parallax y={[0, -80]} x={[0, 0]} tagOuter='figure'>
                <img src={Code1} alt='' className='code1' />
              </Parallax>
            </div>
            <div>
              <Parallax y={[0, 10]} x={[0, -10]} tagOuter='figure'>
                <img src={StackWhu} alt='' className='opacity3' />
              </Parallax>
            </div>
            <div>
              <Parallax y={[0, 20]} x={[0, -20]} tagOuter='figure'>
                <img src={StackWhu} alt='' className='opacity2' />
              </Parallax>
            </div>
            <div>
              <Parallax y={[0, 30]} x={[0, -30]} tagOuter='figure'>
                <img src={StackWhu} alt='' className='opacity1' />
              </Parallax>
            </div>
            <div>
              <Parallax y={[0, 40]} x={[0, -40]} tagOuter='figure'>
                <img src={StackWhu} alt='' />
              </Parallax>
            </div>

            <div>
              <Parallax y={[0, 50]} x={[0, -50]} tagOuter='figure'>
                <img src={Triangle} alt='' />
              </Parallax>
            </div>
            <div className='heighter'></div>
          </div>
        </Col>
      </Row>
    </Container>
    <hr className='hr' />
    <Rectangles />
  </section>
);

export default Banner;
