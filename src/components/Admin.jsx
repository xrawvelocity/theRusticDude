import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import firebase from "firebase";

export default class Admin extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    auth: false,
    add: false,
    popup: "",
    projects: [],
  };

  componentDidMount() {
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
            customer: doc.data().customer,
            rating: doc.data().rating,
            review: doc.data().review,
            date: doc.data().date,
          });
        });
        await this.setState({
          projects,
        });
        console.log(this.state.projects);
      })
      .catch((err) => console.error(err));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        this.setState({
          loading: false,
          auth: true,
        });
        console.log({ token });
      })
      .catch((err) => {
        console.error(err);

        return console.log({ general: "Wrong credentials, please try again" });
      });
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

  handleFileUpload = (e) => {
    const file = e.target.files[0];

    const storageRef = firebase.storage().ref(`photos/${file.name}`);

    storageRef.put(file);

    this.setState({ image: file.name });
  };

  submitProject = (e) => {
    e.preventDefault();

    const newProject = {
      customer: this.state.name,
      rating: this.state.rating,
      review: this.state.review,
      image: `https://firebasestorage.googleapis.com/v0/b/therusticdude.appspot.com/o/photos%2F${this.state.image}?alt=media`,
      date: new Date(),
    };

    firebase
      .firestore()
      .collection("projects")
      .add(newProject)
      .then((doc) => {
        console.log(`Project ${doc.id} created successfully`);
        this.setState({ add: false });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="admin">
        {!this.state.auth ? (
          <div className="admin-login">
            <form
              className="home-contact-form"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <h4
                style={{ marginBottom: "100px" }}
                className="home-contact-title"
              >
                Admin
              </h4>
              <div className="home-contact-form-group">
                <input
                  onChange={(e) => this.handleChange(e)}
                  className="home-contact-form-group__input"
                  type="email"
                  placeholder=""
                  name="email"
                  id="email"
                  required
                />
                <label
                  className="home-contact-form-group__label"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>

              <div className="home-contact-form-group">
                <input
                  onChange={(e) => this.handleChange(e)}
                  className="home-contact-form-group__input"
                  type="password"
                  placeholder=""
                  name="password"
                  id="password"
                  required
                />
                <label
                  className="home-contact-form-group__label"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <button className="home-contact-form-button" type="submit">
                Login
              </button>
            </form>
          </div>
        ) : (
          <Fragment>
            <div className="projects">
              <div
                onClick={() => this.setState({ add: true })}
                className="projects-card"
              >
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="projects-card-add"
                />
              </div>
              {this.loadProjects()}
            </div>
            {this.state.add ? (
              <div className="projects-popup">
                <div className="admin-popup-content">
                  <form
                    className="home-contact-form"
                    onSubmit={(e) => this.submitProject(e)}
                  >
                    <div className="home-contact-form-group">
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className="home-contact-form-group__input"
                        type="text"
                        placeholder=""
                        name="name"
                        id="name"
                        required
                      />
                      <label
                        className="home-contact-form-group__label"
                        htmlFor="name"
                      >
                        Name
                      </label>
                    </div>
                    <div className="home-contact-form-group">
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className="home-contact-form-group__input"
                        type="number"
                        min="1"
                        max="5"
                        placeholder=""
                        name="rating"
                        id="rating"
                        required
                      />
                      <label
                        className="home-contact-form-group__label"
                        htmlFor="rating"
                      >
                        Rating
                      </label>
                    </div>
                    <div className="home-contact-form-group">
                      <input
                        onChange={(e) => this.handleChange(e)}
                        className="home-contact-form-group__input"
                        type="text"
                        placeholder=""
                        name="review"
                        id="review"
                        required
                      />
                      <label
                        className="home-contact-form-group__label"
                        htmlFor="review"
                      >
                        Review
                      </label>
                    </div>
                    <div className="home-contact-form-group-image">
                      <input
                        onChange={(e) => this.handleFileUpload(e)}
                        type="file"
                        className="home-contact-form-group__input-file"
                        name="picture"
                        id="picture"
                        required
                      />
                      <label
                        tabindex="0"
                        for="picture"
                        class="home-contact-form-group__input-file-label"
                      >
                        Select a picture...
                      </label>
                      {this.state.image ? <p>{this.state.image}</p> : null}
                    </div>

                    <button className="home-contact-form-button" type="submit">
                      Add Project
                    </button>
                  </form>
                </div>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="projects-popup_close"
                  onClick={() => this.setState({ add: false })}
                />
              </div>
            ) : null}
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
          </Fragment>
        )}
      </div>
    );
  }
}
