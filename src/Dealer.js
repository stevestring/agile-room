import React, { Component } from 'react';

import Cards from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";
import NavBar from "./NavBar";
import './bootstrap.min.css';
import './App.css';
class Dealer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    
    return (
      <div className="App">
      <NavBar room={this.props.room}/>
        {/* <header className="App-header">
          <h1 className="App-title">Planning Poker - Dealer</h1>
        </header> */}
        <br/>

        <PlayedCards room={this.props.room} roomstate="0"/>
        
      </div>
    );
  }


}

export default Dealer;
