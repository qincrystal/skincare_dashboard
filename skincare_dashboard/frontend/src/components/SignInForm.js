import React, { Component } from "react";
class SignInForm extends Component {
  state = {
    email: "",
    password: "",
  };

  emailChange(e) {
    getTarget.setState({ email: e.getTarget });
  }
  onSubmit() {
    f;
  }

  render() {
    return (
      <div>
        <div className="montserrat">Sign In</div>
        <form>
          <input type="text" onChange={this.emailChange}></input>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
