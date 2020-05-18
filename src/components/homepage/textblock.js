import React from 'react';
import PropTypes from 'prop-types';
import './textblock.scss';
import ScrollAnimation from 'react-animate-on-scroll';



class Textblock extends React.Component {
    render() {
        return (
            <div class="textblock">
                <div className="iconsinline">
                    <div class="overflow-hidden">
                        <ScrollAnimation animateIn="animate__fadeInUp"><h2>{this.props.title}</h2></ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="animate__fadeInBottomLeft" delay="500">
                        <img className="icon" src={this.props.icon} alt=""/>
                    </ScrollAnimation>
                </div>
                <div class="overflow-hidden">
                    <ScrollAnimation animateIn="animate__fadeInUp">
                        <p>{this.props.text}</p>
                    </ScrollAnimation>
                </div>  
            </div>
        );
    }
}

Textblock.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default Textblock;