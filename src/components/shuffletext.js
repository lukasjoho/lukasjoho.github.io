import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap"

import "./shuffletext.scss"
import Particles from 'react-particles-js';
import "../components/particles.scss";
import "animate.css/animate.css"
import ScrollAnimation from 'react-animate-on-scroll';



const textArray = ['ideate', 'create', 'build','excyte', ];

class Shuffletext extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
        <section id="shuffletext">
            <div class="shufflediv">
            <Container>
              <div class="centershuffle">
                <ScrollAnimation animateIn="animate__fadeInUpTitle" duration="1.5">
                <h1 class="text">we <span class="stroke">{textThatChanges}</span></h1>
                </ScrollAnimation>
              </div>
            </Container>
            <Particles 
            height={400} 
            />
            </div>
        </section>        
    )
  }
}

export default Shuffletext;