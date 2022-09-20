import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    type: 0,
    seconds: 0,
    minutes: 0,
    active: false,
  };

  handleClickStart = () => {
    if (this.state.active === false) {
      this.setState({
        active: true,
      });
      this.interval = setInterval(
        () =>
          this.setState({
            type: this.state.type + 1,
          }),
        10
      );
    }
  };

  handleClickStop = () => {
    clearInterval(this.interval);
    this.setState({
      active: false,
    });
  };

  handleClickReset = () => {
    clearInterval(this.interval);
    this.setState({
      type: 0,
      seconds: 0,
      minutes: 0,
      active: false,
    });
  };

  render() {
    return (
      <>
        <h1>
          {this.state.minutes > 59
            ? this.setState({
                minutes: 0,
                seconds: 0,
                type: 0,
              })
            : this.state.minutes}
          :
          {this.state.seconds > 59
            ? this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1,
              })
            : this.state.seconds}
          :
          {this.state.type > 99
            ? this.setState({
                type: 0,
                seconds: this.state.seconds + 1,
              })
            : this.state.type}
        </h1>
        <SwitchButton name="Start" click={this.handleClickStart} />
        <SwitchButton name="Stop" click={this.handleClickStop} />
        <SwitchButton name="Reset" click={this.handleClickReset} />
      </>
    );
  }
}
export default App;
