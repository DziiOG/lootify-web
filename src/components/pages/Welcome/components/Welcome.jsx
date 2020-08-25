import React, { Component } from "react";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import Navbar from "./BackgroundImage/welcomeNavbar/navbar";
import WelcomeContent from "./contentWelcome/welcomeContent";



export class Welcome extends Component {
  render() {
    return (
      <div className="welcomeContainer">
        <div className="welcomeContentContainer">
          <WelcomeContent/>
          <BackgroundImage/>
        </div>
      </div>
    );
  }
}

export default Welcome;
