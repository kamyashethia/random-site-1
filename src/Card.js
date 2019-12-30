import React, { Component } from "react";
import PropTypes from "prop-types";


class Card extends Component {
  render() {
    let cardStyling =  "card " + (this.props.isFacingFront ? "frontCard" : "backCard");
    return <div className={cardStyling}>{this.props.value}</div>;
  }
}

Card.propTypes = {
  isFacingFront: PropTypes.bool.isRequired,
  value: PropTypes.string
}

export default Card;
