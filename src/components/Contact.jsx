import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section style={{marginTop: "20rem"}} className="home-contact">
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
    );
  }
}
