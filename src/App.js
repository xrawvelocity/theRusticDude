import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/FAQ";
import Reviews from "./components/Reviews";

export default class App extends Component {
  state = {
    active: false,
    close: false,
  };

  render() {
    return (
      <Fragment>
        <nav className="navigation">
          <Link onClick={()=>{
              this.setState({ active: false, close: true})
            }} to="/" className="navigation-logo">
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
          <div
            onClick={async () => {
              await this.setState({
                active: !this.state.active,
                close: this.state.active ? true : false,
              });
            }}
            className={!this.state.active ? "hamburger": "hamburger_open"}
          >
            <span className={!this.state.active ? "hamburger-one": "hamburger-one_open"}></span>
            <span className={!this.state.active ? "hamburger-two": "hamburger-two_open"}></span>
            <span className={!this.state.active ? "hamburger-three": "hamburger-three_open"}></span>
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
            <Link onClick={()=>{
              this.setState({ active: false, close: true})
            }} to="/projects" className="navigation-hamburger_projects">
              Projects
            </Link>
            <Link onClick={()=>{
              this.setState({ active: false, close: true})
            }} to="/reviews" className="navigation-hamburger_reviews">
              Reviews
            </Link>
            <Link onClick={()=>{
              this.setState({ active: false, close: true})
            }} to="/about" className="navigation-hamburger_about">
              About
            </Link>
            <Link onClick={()=>{
              this.setState({ active: false, close: true})
            }} to="/contact" className="navigation-hamburger_contact">
              Contact
            </Link>
            <Link onClick={()=>{
              this.setState({ active: false, close: true})
            }} to="/FAQ" className="navigation-hamburger_FAQ">
              FAQ
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={(props) => <Projects {...props} />}
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
            <Route exact path="/Faq" render={(props) => <Faq {...props} />} />
            <Route
              exact
              path="/reviews"
              render={(props) => <Reviews {...props} />}
            />
          </Switch>
        </main>
      </Fragment>
    );
  }
}
