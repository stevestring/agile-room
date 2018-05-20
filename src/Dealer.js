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
    this.state = {showAlert:true, activity:null, playerInputs:[]}
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }


  componentDidMount(){

 
    this.loadRoomData();
    this.loadData();

    // this.interval = setInterval(() => {
    //     this.loadData()}
    // , 1000 * 1)

  }

  loadData()
  {

      if (this.props.room != null)
      {
          axios.get(settings.serverurl+'/player-inputs/'+this.props.room )
              .then(res => this.setState({ playerInputs:res.data.Items }))
              .catch(err => console.log(err));
      }

      // alert("loading player data");
  }

  handleDismiss() {
    this.setState({ showAlert: false });
  }


  handleReset(){
        //delete user cards?  TODO: Is this necessary?
        
        axios.delete(settings.serverurl +'/player-inputs/' +this.props.room)
        .catch(err => alert(err));
      

        //alert(this.state.activity);
        axios.put(settings.serverurl +'/room/' +this.props.room, ({messageid: Date.now(), message:"NH", activity:this.state.activity}))
            .catch(err => alert(err));
  }


  handleActivityChange ( eventKey) {

      //alert ( eventKey);
      var eventCode = "pp";
      if (eventKey==0)
      {
        eventCode = "pp";    
      }
      else if (eventKey==1)
      {
        eventCode = "ff";
        
      }

      this.setState({activity: eventCode},this.handleReset);

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
      <NavBar dealer="true" room={this.props.room} onActivityChange ={this.handleActivtyChange}/>
      
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
        <PlanningPokerDealer cards = {this.state.playerInputs}  onReset = {this.handleReset} roomstate="0"/>
      }
      {(this.state.activity=="ff") &&
        <FistOfFiveDealer cards = {this.state.playerInputs}  onReset = {this.handleReset} roomstate="0"/>
      }
      </div>
    );
  }


  loadRoomData(){
    
    if (this.props.room !=null)
    {
      //alert (this.state.room);
        axios.get(settings.serverurl+'/room/'+ this.props.room )
            .then(res => {
              this.setState({  activity : res.data.Activity})//We processed the message
            })
            .catch(err => console.log(err))
    }

    //alert (this.state.activity);

}

}

export default Dealer;
