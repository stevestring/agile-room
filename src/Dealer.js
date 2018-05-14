import React, { Component } from 'react';


import PlanningPokerDealer from "./PlanningPokerDealer";
import FistOfFiveDealer from "./FistOfFiveDealer";
import axios from "axios/index";
import NavBar from "./NavBar";
import './bootstrap.min.css';
import './App.css';
import { Alert } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
var settings = require( './settings');

class Dealer extends Component {
  

  constructor(props) {
    super(props);
    this.state = {showAlert:true, activity:null}
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({ showAlert: false });
  }

  handleActivityChange ( eventKey) {
      

        //delete user card?  TODO: Is this necessary?
        axios.delete(settings.serverurl +'/player-inputs/' +this.props.room)
            .catch(err => alert(err));

        axios.put((settings.serverurl+'/room/'+this.props.room ), ({name: this.state.roomname, activity:eventCode, activitystate:0, message:"NH"}))
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            alert (error);
        });

      //alert ( eventKey);
      var eventCode = "pp";
      if (eventKey==0)
      {
        eventCode = "pp";
        this.setState({activity: eventCode});
      }
      else if (eventKey==1)
      {
        eventCode = "ff";
        this.setState({activity: eventCode});
      }



  }

  render() {

    var activityName = "-"
    if (this.state.activity=="pp")
    {
      activityName = "Planning Poker"
    }
    else if (this.state.activity=="ff")
    {
      activityName = "Fist Of Five"
    }


    return (
      <div className="App">
      <NavBar room={this.props.room} dealer="true" onActivityChange ={this.handleActivtyChange}/>
      
      {this.state.showAlert?(
        <Alert onDismiss={this.handleDismiss}>
            <h4>Congratulations! You just created a room!</h4>
              <p> Share the room number <Label bsStyle="primary">{this.props.room}</Label> with your team members so they can join the party
            </p>          
        </Alert>):(<div/>
       )
      }

      <Row>
        <Col xs={3} md={3}/>
        <Col xs={6} md={6}><h1>{activityName}</h1></Col>
        <DropdownButton
          title={activityName}
          key={1}
          id={`dropdown-activty`}
        >
            <MenuItem eventKey="0" onSelect={this.handleActivityChange}>Planning Poker</MenuItem>
            <MenuItem eventKey="1"onSelect={this.handleActivityChange} >Fist of Five</MenuItem>
        </DropdownButton>
      </Row>

        <br/>

      {(this.state.activity=="pp") &&
        <PlanningPokerDealer room={this.props.room} roomstate="0"/>
      }
      {(this.state.activity=="ff") &&
        <FistOfFiveDealer room={this.props.room} roomstate="0"/>
      }
      </div>
    );
  }
  componentDidMount(){        
    this.loadData();

  }

  loadData(){

    if (this.props.room !=null)
    {
        axios.get(settings.serverurl+'/room/'+ this.props.room )
            .then(res => {
              this.setState({  activity : res.data.Activity})//We processed the message
            })
            .catch(err => console.log(err))
    }

}

}

export default Dealer;
