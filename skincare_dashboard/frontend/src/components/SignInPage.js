import React, { Component } from "react";
import SignInForm from "./SignInForm.js";
import SkinLogo from "../img/Skincare-amico.svg";
class SignInPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="playfair"> SkinCare Dashboard</div>
        <div className="d-flex justify-content-center">
          <div>
            <SkinLogo width="50vh"></SkinLogo>
          </div>
        </div>
        <SignInForm> </SignInForm>
      </div>
    );
  }
}

export default SignInPage;
