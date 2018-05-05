import React, { Component } from 'react';
import './App.css';
import PlayerHand from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";
import RoomChooser from "./RoomChooser";
import RoomHeader from "./RoomHeader";

class TeamMemberView extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      
      <div className="App">
              
       <RoomHeader room={this.props.room}/>
        <header className="App-header">
          <h1 className="App-title">Planning Poker</h1>
        </header><PlayerHand room={this.props.room}></PlayerHand></div>
    );
  }


}


export default TeamMemberView;
