import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/FAQ";
import Reviews from "./components/Reviews";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navigation">
          <Link to="/" className="navigation-logo">
            <img className="navigation-logo_image" src="./images/theRusticDudeLogoImage.png" alt="logo" />
            <img className="navigation-logo_text" src="./images/theRusticDudeLogoText.png" alt="logo" />
          </Link>
          <div className="navigation-links">
            <Link to="/projects" className="navigation-links_projects">
              Projects
            </Link>
            <Link to="/reviews" className="navigation-links_reviews">
              Reviews
            </Link>
            <Link to="/about" className="navigation-links_about">
              About
            </Link>
            <Link to="/contact" className="navigation-links_contact">
              Contact
            </Link>
            <Link to="/FAQ" className="navigation-links_FAQ">
              FAQ
            </Link>
          </div>
          <div className="navigation-hamburger">
            <Link to="/projects" className="navigation-hamburger_projects">
              Projects
            </Link>
            <Link to="/reviews" className="navigation-hamburger_reviews">
              Reviews
            </Link>
            <Link to="/about" className="navigation-hamburger_about">
              About
            </Link>
            <Link to="/contact" className="navigation-hamburger_contact">
              Contact
            </Link>
            <Link to="/FAQ" className="navigation-hamburger_FAQ">
              FAQ
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/projects" render={(props) => <Projects {...props} />} />
            <Route exact path="/about" render={(props) => <About {...props} />} />
            <Route exact path="/contact" render={(props) => <Contact {...props} />} />
            <Route exact path="/Faq" render={(props) => <Faq {...props} />} />
            <Route exact path="/reviews" render={(props) => <Reviews {...props} />} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}
