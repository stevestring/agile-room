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
    this.state = {room: Math.floor(Math.random()*100)};
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  render() {

    const inRoom = this.state.room != null;
    
    return (
      <div className="App">
      <RoomHeader room={this.state.room}/>
        <header className="App-header">
          <h1 className="App-title">Planning Poker - Dealer</h1>
        </header>
        <br/>
        {/* <RoomChooser onChange={this.handleRoomChange}/> */}

        {inRoom?(
        <PlayedCards room={this.state.room}/>):(<label/>)}
        
      </div>
    );
  }

  handleRoomChange(event)
  {
      this.setState({room: event});
  }


}

export default Dealer;
