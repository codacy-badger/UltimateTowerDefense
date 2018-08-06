import React, { Component } from "react";
import LevelOne from "./LevelOne";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 8, 8, 8, 0],
        [0, 0, 0, 0, 0, 0, 8, 8, 8, 0],
        [0, 0, 0, 0, 0, 0, 8, 8, 8, 0]
      ]
    };
  }
  render() {
    return (
      <div>
        <p>this is game</p>
        <LevelOne detail = {this.state.data} />
      </div>
    );
  }
}

export default Game;
