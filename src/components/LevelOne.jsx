import React, { Component } from "react";

class LevelOne extends Component {
  render() {
    let detail = this.props.detail.map((arr, index) => (
      <div key={index}>
        {arr.map((value, i) => <div key={i}>{value}</div>)}
      </div>
    ));
    let grid = {};
    return (
      <div>
        <p>this is level 1 grid</p>
        <div className="grid">{detail}</div>
      </div>
    );
  }
}

export default LevelOne;
