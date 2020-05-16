import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import "./parallaxbox.scss"
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Parallaximage from '../images/content/parallaxbanner.jpg'
import Parallaxboarderleft from '../images/content/parallaxboarderleft.png'

import Parallaxoverlay from '../images/content/parallaxbanner-redbull-cropped.png'



class ParallaxBox extends Component {


  render() {

    return (
        <ParallaxProvider>
          <section id="parallaxbox">
            <ParallaxBanner
              className="parallax-banner"
              layers={[
                  {
                      image: `${Parallaximage}`,
                      amount: 0.2 ,
                  },
                  {
                    image: `${Parallaxboarderleft}`,
                    amount: 0,
                  },
                  {
                      image: `${Parallaxoverlay}`,
                      amount: -0.2,
                  },
              ]}
              style={{
                  height: '100%',
              }}
              >
                <Container>
                <h1><span>Zielorientiert,</span> <br/><span>
                zum nächsten Projekt</span></h1>
                </Container>
              
            </ParallaxBanner>
          {/* <Parallax class="parallax-absolute"
              blur={0}
              bgImage={require('../images/content/parallaxbanner.jpg')}
              bgImageAlt="the cat"
              strength={300}
          >
            <div class="parallaxinner">
              <Container>
                <h1><span>Zielfokussiert,</span><br/><span>zum nächsten Projekt.</span> </h1>
              </Container>
              
            </div>
          </Parallax>
          <Parallax class="parallax-absolute"
              blur={0}
              bgImage={require('../images/content/parallaxbanner-redbull.png')}
              bgImageAlt="the cat"
              strength={300}
          >
            <div class="parallaxinner">
              
            </div>
          </Parallax> */}
          </section>
        </ParallaxProvider>       
    )
  }
}

export default ParallaxBox;