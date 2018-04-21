import React, { Component } from 'react';
import './App.css';
import PlayerHand from './PlayerHand.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Planning Poker</h1>
        </header>

      <PlayerHand></PlayerHand>
      </div>
    );
  }
}


export default App;
