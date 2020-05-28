import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Projects extends Component {
  state = {
    projects: [
      {
        title: "Gray tint chair",
        customer: "Jorge A.",
        review: 5,
        image: "../images/woodwork.jpg",
        date: new Date().toDateString(),
      },
      {
        title: "Blue tint table",
        customer: "Jorge B.",
        review: 4,
        image: "../images/ManuelImage.jpg",
        date: new Date().toDateString(),
      },
    ],
    popup: "",
  };

  loadProjects = () => {
    return this.state.projects.map((project) => {
      return (
        <div
          onClick={() => {
            this.setState({ popup: project.image });
          }}
          className="projects-card"
        >
          <img
            src={project.image}
            alt="project"
            className="projects-card_image"
          />
          <h6 className="projects-card_title">{project.title}</h6>
          <div className="projects-card-customer">
            <p className="projects-card-customer_name">{project.customer}</p>
            <p className="projects-card-customer_review">
              Rating: {project.review}/5
            </p>
          </div>
          <p className="projects-card_date">{project.date}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="projects">
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.loadProjects()}
        {this.state.popup !== "" && (
          <div className="projects-popup">
            <img
              src={this.state.popup}
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
