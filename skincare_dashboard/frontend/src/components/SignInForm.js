import React, { Component } from "react";
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
  }

  render() {
    return (
      <div>
        <div className="montserrat">Sign In</div>
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
        </form>
      </div>
    );
  }
}

export default SignInForm;
