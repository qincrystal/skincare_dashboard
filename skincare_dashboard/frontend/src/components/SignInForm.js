import React, { Component } from "react";
import firebase from "firebase";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.emailChange = this.emailChange.bind(this);
    this.passWordChange = this.passwordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.email} ${this.state.password}`);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      console.log('signed in');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('failed to sign in');
    });
  }

  onCreate(e) {
    e.preventDefault();
    console.log(`${this.state.email} ${this.state.password}`);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      console.log('created account');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('failed to create account');
    });
  }

  render() {
    return (
      <div>
        <div>Sign In</div>
        <form>
          <input
            type="text"
            value={this.state.email}
            onChange={(e) => this.emailChange(e)}
          ></input>
          <input
            type="text"
            value={this.state.password}
            onChange={(e) => this.passwordChange(e)}
          ></input>
          <button onClick={this.onSubmit}>Submit</button>
          <button onClick={this.onCreate}>Create account</button>
	</form>
      </div>
    );
  }
}

export default SignInForm;
