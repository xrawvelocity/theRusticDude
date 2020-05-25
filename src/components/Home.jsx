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
              Learn more about me
            </Link>
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
            <Link to="/projects" className="home-cta_button">
              See my latest work
            </Link>
          </div>
        </section>
        <div className="home-divisor"></div>
        <section className="home-main">
          <div className="home-cta">
            <div className="home-cta_text">
              But why take that from me? Hear what my latest clients have to say
              about my service
            </div>
            <Link to="/reviews" className="home-cta_button">
              See the latest reviews
            </Link>
          </div>
          <img
            src="../images/handshake.jpg"
            alt="woodwork"
            className="home-image1"
          />
        </section>
        <section className="home-contact">
          <h4 className="home-contact-title">
            So what will it be? A chair, a table, or something else?
          </h4>
          <form
            class="home-contact-form"
            action="https://formspree.io/xjvojgwr"
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
                type="text"
                placeholder=""
                name="company"
                id="company"
              />
              <label class="home-contact-form-group__label" for="company">
                Company/Organization
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