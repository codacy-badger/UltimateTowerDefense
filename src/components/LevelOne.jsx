import React, { Component } from "react";

class LevelOne extends Component {
  render() {
    let detail = this.props.detail.map((arr, index) => (
      <div key={index}>
        {arr.map((value, i) => {
          if (value == 0) {
            return <div key={i} className="black each-div">
              {value}
            </div>;
          } else {
            return <div key={i} className="white each-div">
              {value}
            </div>;
          }
        })}
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
