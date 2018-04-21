import React, { Component } from 'react';
import './App.css';
import Cards from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";


class Dealer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Planning Poker - Dealer</h1>
        </header>

      <PlayedCards></PlayedCards>
      </div>
    );
  }




}


export default Dealer;
