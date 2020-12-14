import React, { Component } from "react";
import SkinLogo from "../img/Skincare-amico.svg";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div>
              <SkinLogo width="50vh"></SkinLogo>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ maxWidth: "50vw" }}
          >
            <p>Toner</p>
            <p>Masks</p>
            <p>Mosturiser</p>
          </div>
          <div
            className="d-flex justify-content-around "
            style={{ maxWidth: "50vw" }}
          >
            <p>Acne</p>
            <p>Cleanser</p>
            <p>Sunscreen</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
