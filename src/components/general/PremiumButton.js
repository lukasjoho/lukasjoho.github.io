import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PremiumButton.css";
import { Link } from "gatsby";

class PremiumButton extends Component {
  componentDidMount() {}

  render() {
    return (
      <Link to={this.props.to} className="premium-button">
        <span className="module">{this.props.text}</span>
      </Link>
    );
  }
}

PremiumButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default PremiumButton;
