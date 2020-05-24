import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="home-main">
          <div className="home-cta">
            <div className="home-cta_text">
              Hello. My name is Manuel and I craft beautiful furniture from wood
              for stylish people, like you.
            </div>
            <Link to="/about" className="home-cta_button">
              Learn More
            </Link>
          </div>
          <div className="home-image"></div>
        </section>
        <section className="home-skills">
        <div className="home-skills-each">
            <FontAwesomeIcon
              icon={faSearch}
              className="home-skills-each_icon"
            />
            <div className="home-skills-each-text">
              <h4 className="home-skills-each-text_title">Detail oriented</h4>
              <p className="home-skills-each-text_paragraph">
                Will go the extra mile to ensure top quality by measuring every inch and every corner
              </p>
            </div>
          </div>
          <div className="home-skills-each">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="home-skills-each_icon"
            />
            <div className="home-skills-each-text">
              <h4 className="home-skills-each-text_title">Creative</h4>
              <p className="home-skills-each-text_paragraph">
                Creative and innovative outcomes guaranteed to your liking
              </p>
            </div>
          </div>
          <div className="home-skills-each">
            <FontAwesomeIcon
              icon={faSearch}
              className="home-skills-each_icon"
            />
            <div className="home-skills-each-text">
              <h4 className="home-skills-each-text_title">Detail oriented</h4>
              <p className="home-skills-each-text_paragraph">
                Will go the extra mile to ensure top quality
              </p>
            </div>
          </div>
          <div className="home-skills-each">
            <FontAwesomeIcon
              icon={faSearch}
              className="home-skills-each_icon"
            />
            <div className="home-skills-each-text">
              <h4 className="home-skills-each-text_title">Detail oriented</h4>
              <p className="home-skills-each-text_paragraph">
                Will go the extra mile to ensure top quality
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
