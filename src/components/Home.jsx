import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-cta">
          <div className="home-cta_text">
            Hello. My name is Manuel and I craft beautiful furniture with wood for stylish people, like you.
          </div>
          <Link to="/about" className="home-cta_button">Learn More</Link>
        </div>
        <div className="home-image"></div>
      </div>
    );
  }
}
