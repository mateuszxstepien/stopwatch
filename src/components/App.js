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
      this.interval = setInterval(
        () =>
          this.setState({
            type: this.state.type + 1,
            active: true,
          }),
        10
      );
    }
  };

  handleClickStop = () => {
    if (this.state.active === true) {
      clearInterval(this.interval);
      this.setState({
        active: false,
      });
    }
  };

  handleClikcReset = () => {
    clearInterval(this.interval);
    this.setState({
      type: 0,
      seconds: 0,
      minutes: 0,
    });
  };

  render() {
    return (
      <>
        <h1>
          {this.state.minutes > 59
            ? this.setState({
                minutes: 0,
              })
            : this.state.minutes}
          :
          {this.state.seconds > 59
            ? this.setState({
                seconds: 0,
                minutes: this.setState.minutes + 1,
              })
            : this.state.seconds}
          :
          {this.state.type > 99
            ? this.setState({
                type: 0,
                seconds: this.state.seconds + 1,
              })
            : this.state.type < 10
            ? `0${this.state.type}`
            : this.state.type}
        </h1>
        <SwitchButton name="Start" click={this.handleClickStart} />
        <SwitchButton name="Stop" click={this.handleClickStop} />
        <SwitchButton name="Reset" click={this.handleClikcReset} />
      </>
    );
  }
}

export default App;
