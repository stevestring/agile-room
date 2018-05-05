import React, { Component } from 'react';

import Cards from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";
import RoomChooser from "./RoomChooser";
import RoomHeader from "./RoomHeader";
import './bootstrap.min.css';
import './App.css';
class Dealer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    
    return (
      <div className="App">
      <RoomHeader room={this.props.room}/>
        <header className="App-header">
          <h1 className="App-title">Planning Poker - Dealer</h1>
        </header>
        <br/>

        <PlayedCards room={this.props.room}/>
        
      </div>
    );
  }


}

export default Dealer;
