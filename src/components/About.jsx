import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home">
        <section className="home-main">
          <div className="home-cta">
            <div className="home-cta_text">
              Hello. My name is Manuel and I craft beautiful furniture from wood
              for stylish people, like you.
            </div>
          </div>
          <img
            src="../images/woodwork.jpg"
            alt="woodwork"
            className="home-image1"
          />
        </section>
        <div className="home-divisor"></div>
        <section className="home-main">
          <img
            src="../images/ManuelImage.jpg"
            alt="Manuel"
            className="home-image2"
          />
          <div className="home-cta">
            <div className="home-cta_text">
              There's nothing that I'm more passionate about than working with
              my hands
            </div>
          </div>
        </section>
        <div className="home-divisor"></div>
        <section className="home-main home-main-last">
          <div className="home-cta">
            <div className="home-cta_text">
              But why take that from me? Hear what my latest clients have to say
              about my service
            </div>
          </div>
          <img
            src="../images/handshake.jpg"
            alt="woodwork"
            className="home-image1"
          />
        </section>
      </div>
    );
  }
}
