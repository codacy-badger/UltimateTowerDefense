import React, { Component } from 'react';
import './App.css';
import Levels from './Levels'
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> ULTIMATE TOWER DEFENSE </h1>
        <Levels/>
        <Game />
      </div>
    );
  }
}

export default App;
