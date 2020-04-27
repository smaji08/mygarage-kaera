import React, { Component } from "react";

class Schedule extends Component {
  state = { hi: "Aug s Page" };
  render() {
    return (
      <div>
        <h2>{this.state.hi}</h2>
      </div>
    );
  }
}

export default Schedule;
