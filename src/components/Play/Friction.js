import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentFriction: PropTypes.number.isRequired,
  changeFriction: PropTypes.func.isRequired
};

// Default props
const defaultProps = {
  title: "Friction"
};

// The Friction class represents the friction level
class Friction extends Component {

  /**
   * handleChange() calls the changeFriction() function which belongs to parent 
   * component Play, via accessing props, and updates the state accordingly
   */
  handleChange = (e) => {
    this.props.changeFriction(Number(e.target.value));
  }

  // render() updates the DOM
  render = () => {
    return (
      <div className="container">
        <div id="friction-details">
          <div className="title">{this.props.title}</div>
          <div className="percentage">{`${this.props.currentFriction.toFixed(2)}`}</div>
        </div>
        <div className="input-container">
          <input
            id="friction"
            type="range"
            step="any"
            onChange={this.handleChange}
            value={this.props.currentFriction}
            min="0.1" max="1"
          />
        </div>
      </div>
    );
  }
}

Friction.propTypes = propTypes;
Friction.defaultProps = defaultProps;

export default Friction;