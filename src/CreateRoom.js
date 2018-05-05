import React, { Component } from 'react';

import Cards from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";
import RoomChooser from "./RoomChooser";
import RoomHeader from "./RoomHeader";
import './bootstrap.min.css';
import './App.css';
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
var settings = require( './settings');


class CreateRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {room: Math.floor(Math.random()*100), activity:"pp", roomname:null};
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleRoomNameChange(event) {
    this.setState({roomname: event.target.value});
  }

  handleActivityChange(event) {
    this.setState({activity: event.target.value});
  }


handleSubmit(event) {
    this.setState({roomname: this.state.roomname});
    this.setState({activity: this.state.activity});


    //Call API
    axios.put((settings.serverurl+'/room/'+this.state.room ), ({name: this.state.roomname, activity:this.state.activity, activitystate:0}))
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
        alert (error);
    });

    //Navgate to Dealer (Supply room)
    this.props.history.push("/dealer/"+this.state.room);
    
}


  render() {

    const inRoom = this.state.room != null;
    
    return (
      <div className="App">
      <RoomHeader room={this.state.room}/>
        <header className="App-header">
          <h1 className="App-title">Create a Room</h1>
        </header>
        <br/>
        <Grid>
                
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="room" bsSize="lg">
                    <ControlLabel>Room Name</ControlLabel>
                        <FormControl type="text" name="roomName" placeholder="Enter room name" onChange={this.handleRoomNameChange}/>
                        <ControlLabel>Room Activity</ControlLabel>
                      <FormControl componentClass="select" placeholder="Planning Poker" onChange={this.handleActivityChange}>
                        <option value="pp">Planning Poker</option>
                        <option value="ff">Fist Of Five</option>
                      </FormControl>
                    </FormGroup>{' '}
                    <Button bsSize="lg" type="submit">OK</Button>
                </Form>
        </Grid>
      </div>
    );
  }

  handleRoomChange(event)
  {
      this.setState({room: event});
  }


}

export default CreateRoom;
