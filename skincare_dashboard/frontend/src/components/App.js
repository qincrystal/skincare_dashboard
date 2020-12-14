import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignInPage from "./SignInPage";
import styles from "../css/fonts.css";
import firebase from "firebase";
import Homepage from "./Homepage";

firebase.initializeApp({
  apiKey: "AIzaSyBzIN0CwepDFNA_pCAExFSHlx8wtIa01Oc",
  authDomain: "skincare-dashboard.firebaseapp.com",
  databaseURL: "https://skincare-dashboard.firebaseio.com",
  projectId: "skincare-dashboard",
  storageBucket: "skincare-dashboard.appspot.com",
  messagingSenderId: "698859031457",
  appId: "1:698859031457:web:3e292ade0bc859fd2e19e0",
  measurementId: "G-P4CS3FZTRM",
});

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        Test App
        <SignInPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
