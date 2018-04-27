import React, { Component } from 'react';
import './App.css';
import Cards from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";
import RoomChooser from "./RoomChooser";

class Dealer extends Component {

  constructor(props) {
    super(props);
    this.state = {room:null};
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Planning Poker - Dealer</h1>
        </header>
        <RoomChooser onChange={this.handleRoomChange}/>
      <PlayedCards room={this.state.room}/>
      </div>
    );
  }

  handleRoomChange(event)
  {
      this.setState({room: event});
  }


}


export default Dealer;
