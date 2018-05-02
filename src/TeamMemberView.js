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
    this.state = {room:0 };
    this.handleRoomChange = this.handleRoomChange.bind(this);
  }

  render() {

    const inRoom = this.state.room != 0;
    alert ("render:" + this.state.room + ":" + inRoom);
    return (
      
      <div className="App">
              
        {inRoom?(<div><RoomHeader room={this.state.room}/>
        <header className="App-header">
          <h1 className="App-title">Planning Poker</h1>
        </header><PlayerHand room={this.state.room}></PlayerHand></div>):(<div> <header className="App-header">
          <h1 className="App-title">Main Lobby</h1>
        </header><RoomChooser onChangeRoom={this.handleRoomChange}/></div>)}
        
      </div>
    );
  }

  handleRoomChange(event)
  {
      alert("roomchangeevent:" + event);
      this.setState({room: event});
     
      
  }

}


export default TeamMemberView;
