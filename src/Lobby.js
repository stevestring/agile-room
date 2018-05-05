import React, { Component } from 'react';
import './App.css';
import PlayerHand from './PlayerHand.js';
import PlayedCards from "./PlayedCards";
import axios from "axios/index";
import RoomChooser from "./RoomChooser";
import RoomHeader from "./RoomHeader";
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
class Lobby extends Component {

  constructor(props) {
    super(props);
    this.state = {room:0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

  
    return (
      
      <div className="App">
       <header className="App-header">
          <h1 className="App-title">Main Lobby</h1>
        </header>
        <br/>
        <br/>
                <Grid>
                
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="roomNumber" bsSize="lg">
                        <FormControl type="text" name="roomNumber" placeholder="Enter room number" onChange={this.handleChange}/>
                    </FormGroup>{' '}
                    <Button bsSize="lg" type="submit">Go</Button>
                </Form>
             </Grid>
      </div>
    );
  }

  handleChange(event)
  {

      this.setState({room: event.target.value});
      
  }
  handleSubmit(event) {

    this.props.history.push("/room/"+this.state.room);
    
}
}


export default Lobby;
