import React, { Component } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Home from "./components/Home";
import Game from "./components/Game";
import LanguageFooter from "./components/LanguageFooter";
import "./css/bootstrap.css";
import "./css/home.css";
import "./css/board.css";
import "./css/fonts.css";
import Tutorial from "./components/Tutorial";

class Layout extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = this.originalState();
    this.changeToAi = this.changeToAi.bind(this);
    this.changeToHome = this.changeToHome.bind(this);
    this.changeToPvp = this.changeToPvp.bind(this);
    this.changeToTutorial = this.changeToTutorial.bind(this);
  }

  changeToAi() {
    this.setState({
      ai: true
    });
  }

  changeToPvp() {
    this.setState({
      pvp: true
    });
  }

  changeToTutorial() {
    this.setState({
      tutorial: true
    });
  }

  changeToHome() {
    this.setState(this.originalState);
  }

  originalState() {
    return {
      ai: false,
      pvp: false,
      tutorial: false
    };
  }

  render() {
    let returningComponent;
    if (this.state.ai) {
      returningComponent = <Game ai={true} back={this.changeToHome} />;
    } else if (this.state.pvp) {
      returningComponent = <Game ai={false} back={this.changeToHome} />;
    } else if (this.state.tutorial) {
      returningComponent = <Tutorial back={this.changeToHome} />;
    } else {
      returningComponent = (
        <Home
          changeToAi={this.changeToAi}
          changeToPvp={this.changeToPvp}
          changeToTutorial={this.changeToTutorial}
        />
      );
    }
    return (
      <div>
        {returningComponent}
        <LanguageFooter changeLocale={this.props.changeLocale} />
        <NotificationContainer />
      </div>
    );
  }
}

//
export default Layout;