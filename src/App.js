import React, { Component } from 'react';
import './App.css';
import Levels from './Levels'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> ULTIMATE TOWER DEFENSE </h1>
        <Levels/>
      </div>
    );
  }
}

export default App;
