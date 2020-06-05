import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import firebase from "firebase";

export default class Reviews extends Component {
    state = {
        reviews: [],
        popup: "",
      };
  componentDidMount() {
    window.scrollTo(0, 0);
    firebase
      .firestore()
      .collection("reviews")
      .get()
      .then(async (data) => {
        let reviews = [];
        data.forEach((doc) => {
          reviews.push({
            reviewId: doc.id,
            image: doc.data().image,
            customer: doc.data().customer,
            rating: doc.data().rating,
            review: doc.data().review,
            date: doc.data().date,
          });
        });
        await this.setState({
          reviews: reviews.sort((a, b) => {
            return b.date - a.date;
          }),
        });
        console.log(this.state.reviews);
      })
      .catch((err) => console.error(err));
  }

  loadReviews = () => {
    return this.state.reviews.map((project) => {
      return (
        <div
          onClick={() => {
            this.setState({ popup: project });
          }}
          className="projects-card"
        >
          <img
            src={project.image}
            alt="project"
            className="projects-card_image"
          />
          <h6 className="projects-card_title">{project.title}</h6>
          <div className="projects-card-content">
            <div className="projects-card-customer">
              <p className="projects-card-customer_name">{project.customer}</p>
              <p className="projects-card-customer_rating">
                Rating: {project.rating}/5
              </p>
            </div>
            <p className="projects-card_review">"{project.review}"</p>
          </div>
          <p className="projects-card_date">
            {new Date(project.date.seconds * 1000).toDateString()}
          </p>
        </div>
      );
    });
  };
  render() {
    return (
        <div className="projects">
        {this.loadReviews()}
        {this.state.popup !== "" && (
          <div className="projects-popup">
            <img
              src={this.state.popup.image}
              alt="project"
              className="projects-popup_image"
            />
            <FontAwesomeIcon
              onClick={() => {
                this.setState({ popup: "" });
              }}
              icon={faTimes}
              className="projects-popup_close"
            />
          </div>
        )}
      </div>
    );
  }
}
