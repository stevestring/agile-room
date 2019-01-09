import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import NavBar from "./NavBar";
import ActivityHeader from '../src/components/ActivityHeader';

var settings = require( './settings');
class FAQ extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const leftDivStyle = {
      "text-align": "left"
  };
    return (
      
      <div className="App">
      <NavBar/>
      <ActivityHeader activityName="FAQ"/>
      <div style ={leftDivStyle}>
      <br/>
      <Grid>
      <ListGroup>
  <ListGroupItem header="How much does it cost to use Team Room?">Team Room is a 100% free to use.  This is a hobby project for the creator with manageable costs.</ListGroupItem>
  <ListGroupItem header="What sort of activities/games does Team room support?">Team Room currently supports Planning Poker, "Fist of Five", an several branstorming/list generation tools (What Went Well, What Went Wrong, Improvement Ideas)</ListGroupItem>
  <ListGroupItem header="How can I contact the developer?">You can currently reach the developer though his <a href="https://www.linkedin.com/in/steve-string/">LinkedIn account</a> </ListGroupItem>

</ListGroup>
      </Grid>
      </div>
      </div>
    );
  }

  
}


export default FAQ;
