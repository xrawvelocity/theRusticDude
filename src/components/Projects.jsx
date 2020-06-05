import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import firebase from "firebase";

export default class Projects extends Component {
  state = {
    projects: [],
    popup: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    firebase
      .firestore()
      .collection("projects")
      .get()
      .then(async (data) => {
        let projects = [];
        data.forEach((doc) => {
          projects.push({
            projectId: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            description: doc.data().description,
            date: doc.data().date,
          });
        });
        await this.setState({
          projects: projects.sort((a,b)=>{
              return b.date - a.date
          }),
        });
        console.log(this.state.projects);
      })
      .catch((err) => console.error(err));
  }

  loadProjects = () => {
    return this.state.projects.map((project) => {
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
              <p className="projects-card-customer_name">{project.name}</p>
            </div>
            <p className="projects-card_review">{project.description}</p>
          </div>
          
        </div>
      );
    });
  };

  render() {
    return (
      <div className="projects">
        {this.loadProjects()}
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
