import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Admin from "./components/Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class App extends Component {
  state = {
    active: false,
    close: false,
    selected: "",
  };

  render() {
    return (
      <Fragment>
        <nav className="navigation">
          <Link
            onClick={() => {
              this.setState({ active: false, close: true, selected: "" });
            }}
            to="/"
            className="navigation-logo"
          >
            <img
              className="navigation-logo_image"
              src="./images/theRusticDudeLogoImage.png"
              alt="logo"
            />
            <img
              className="navigation-logo_text"
              src="./images/theRusticDudeLogoText.png"
              alt="logo"
            />
          </Link>
          <div className="navigation-links">
            <Link
              onClick={() => {
                this.setState({ selected: "projects" });
              }}
              to="/projects"
              className={`navigation-links_projects ${
                this.state.selected === "projects" ||
                window.location.href.includes("projects")
                  ? "navigation-links_active"
                  : null
              }`}
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                this.setState({ selected: "about" });
              }}
              to="/about"
              className={`navigation-links_about ${
                this.state.selected === "about" ||
                window.location.href.includes("about")
                  ? "navigation-links_active"
                  : null
              }`}
            >
              About
            </Link>
            <Link
              onClick={() => {
                this.setState({ selected: "contact" });
              }}
              to="/contact"
              className={`navigation-links_contact ${
                this.state.selected === "contact" ||
                window.location.href.includes("contact")
                  ? "navigation-links_active"
                  : null
              }`}
            >
              Contact
            </Link>
            <Link
              onClick={() => {
                this.setState({ selected: "FAQ" });
              }}
              to="/FAQ"
              className={`navigation-links_FAQ ${
                this.state.selected === "FAQ" ||
                window.location.href.includes("FAQ")
                  ? "navigation-links_active"
                  : null
              }`}
            >
              FAQ
            </Link>
          </div>
          <div
            onClick={async () => {
              await this.setState({
                active: !this.state.active,
                close: this.state.active ? true : false,
              });
            }}
            className={!this.state.active ? "hamburger" : "hamburger_open"}
          >
            <span
              className={
                !this.state.active ? "hamburger-one" : "hamburger-one_open"
              }
            ></span>
            <span
              className={
                !this.state.active ? "hamburger-two" : "hamburger-two_open"
              }
            ></span>
            <span
              className={
                !this.state.active ? "hamburger-three" : "hamburger-three_open"
              }
            ></span>
          </div>
          <div
            className={
              !this.state.active
                ? `navigation-hamburger ${
                    this.state.close ? "navigation-hamburger_close" : ""
                  }`
                : "navigation-hamburger_active"
            }
          >
            <Link
              onClick={() => {
                this.setState({ active: false, close: true });
              }}
              to="/projects"
              className="navigation-hamburger_projects"
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                this.setState({ active: false, close: true });
              }}
              to="/about"
              className="navigation-hamburger_about"
            >
              About
            </Link>
            <Link
              onClick={() => {
                this.setState({ active: false, close: true });
              }}
              to="/contact"
              className="navigation-hamburger_contact"
            >
              Contact
            </Link>
            <Link
              onClick={() => {
                this.setState({ active: false, close: true });
              }}
              to="/FAQ"
              className="navigation-hamburger_FAQ"
            >
              FAQ
            </Link>
          </div>
        </nav>
        <Fragment>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={(props) => <Projects {...props} />}
            />
            <Route
              exact
              path="/reviews"
              render={(props) => <Reviews {...props} />}
            />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
            <Route exact path="/FAQ" render={(props) => <FAQ {...props} />} />

            <Route
              exact
              path="/admin"
              render={(props) => <Admin {...props} />}
            />
          </Switch>
        </Fragment>
        <footer className="footer">
          <div className="footer-links">
            <a href="https://www.facebook.com/theRusticDude/" className="footer-links_facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/therusticdude/" className="footer-links_instagram" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon  icon={faInstagram} /></a>
            <a href="https://offerup.co/SVwgvyaK86" className="footer-links_offerup" target="_blank" rel="noopener noreferrer"> <img className="footer-links_offerup-image" src="../images/offerup.jpg" alt="offerup" /></a>
          </div>
          <div className="footer-logo">
            <img
              className="navigation-logo_image"
              src="./images/theRusticDudeLogoImage.png"
              alt="logo"
            />
          </div>
          <div className="footer-contact">
            <p>Phone: (305) 399-9126</p>
            <p>
              Email:{" "}
              <a href="mailto:team@therusticdude.com">team@therusticdude.com</a>
            </p>
            <p>
              Website created by &nbsp;
              <a
                href="https://www.vic-dev.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victor
              </a>
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}
