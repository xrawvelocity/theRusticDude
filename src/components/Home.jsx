import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
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
            <Link to="/about" className="home-cta_button">
              Learn more about me
            </Link>
          </div>
          <img
            src="../images/detail.png"
            alt="detail"
            className="home-image1"
          />
        </section>
        <div className="home-divisor"></div>
        <section className="home-main">
          <img
            src="../images/carry.jpg"
            alt="carry"
            className="home-image2"
          />
          <div className="home-cta">
            <div className="home-cta_text">
              There's nothing that I'm more passionate about than working with
              my hands
            </div>
            <Link to="/projects" className="home-cta_button">
              See my latest work
            </Link>
          </div>
        </section>
        <div className="home-divisor"></div>
        <section className="home-main home-main-last">
          <div className="home-cta">
            <div className="home-cta_text">
              Have any questions? Check out the Frequently Asked Questions section
            </div>
            <Link to="/FAQ" className="home-cta_button">
              Frequently Asked Questions
            </Link>
          </div>
          <img
            src="../images/coffee.jpg"
            alt="coffee"
            className="home-image1"
          />
        </section>
        <section className="home-contact">
          <h4 className="home-contact-title">
            So what will it be? A chair, a table, or something else?
          </h4>
          <form
            class="home-contact-form"
            action="https://formspree.io/xqkyqkad"
            method="POST"
          >
            <div class="home-contact-form-group">
              <input
                class="home-contact-form-group__input"
                type="text"
                placeholder=""
                name="name"
                id="name"
                required
              />
              <label class="home-contact-form-group__label" for="name">
                Name
              </label>
            </div>

            <div class="home-contact-form-group">
              <input
                class="home-contact-form-group__input"
                type="email"
                placeholder=""
                name="_replyto"
                id="email"
                required
              />
              <label class="home-contact-form-group__label" for="email">
                Email
              </label>
            </div>

            <div class="home-contact-form-group">
              <input
                class="home-contact-form-group__input"
                name="message"
                placeholder=""
                id="message"
              />
              <label class="home-contact-form-group__label" for="message">
                Message
              </label>
            </div>
            <button class="home-contact-form-button" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}
