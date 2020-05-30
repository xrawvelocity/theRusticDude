import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAsUr3nUlgLckQPmqKVS5M0LrRmc6ewXO8",
  authDomain: "therusticdude.firebaseapp.com",
  databaseURL: "https://therusticdude.firebaseio.com",
  projectId: "therusticdude",
  storageBucket: "therusticdude.appspot.com",
  messagingSenderId: "775980664638",
  appId: "1:775980664638:web:71bcafd0c38ed044cb4e6f",
  measurementId: "G-QM09C9P22M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
