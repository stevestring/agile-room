import React, { Component } from 'react';


import PlanningPokerDealer from "./activities/PlanningPokerDealer";
import FistOfFiveDealer from "./activities/FistOfFiveDealer";
import InputListDealer from "./activities/InputListDealer";
import VotingListDealer from "./activities/VotingListDealer";
import axios from "axios/index";
import NavBar from "./NavBar";
import './bootstrap.min.css';
import './App.css';
import { Alert } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import {subscribeToPlayerInputChanges} from './api.js';
import {subscribeToRoomInputChanges} from './api.js';

var settings = require( './settings');

class Dealer extends Component {
  

  constructor(props) {
    super(props);
    this.state = {showAlert:true, activity:null, activityState:"NEW", playerInputs:[],roomInputs:[]}
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleActivityStateChange = this.handleActivityStateChange.bind(this);

    subscribeToPlayerInputChanges(this.props.room, (err,room) => this.loadData());
    subscribeToRoomInputChanges(this.props.room, (err,room) => this.loadRoomInputs());

  }


  componentDidMount(){
 
    this.loadRoomData();
    this.loadData();
    this.loadRoomInputs();
  }

  loadData()
  {

      if (this.props.room != null)
      {
          axios.get(settings.serverurl+'/player-inputs/'+this.props.room )
              .then(res => this.setState({ playerInputs:res.data.Items }))
              .catch(err => console.log(err));
      }

  }

  loadRoomInputs()
  {

      if (this.props.room != null)
      {
          axios.get(settings.serverurl+'/room-inputs/'+this.props.room )
              .then(res => this.setState({ roomInputs:res.data.Items }))
              .catch(err => console.log(err));
      }

  }


  handleDismiss() {
    this.setState({ showAlert: false });
  }


  handleReset(){
        //delete user cards?  TODO: Is this necessary?
        
        axios.delete(settings.serverurl +'/player-inputs/' +this.props.room)
        .then(res => this.setState({ playerInputs:[]}))   
        .catch(err => alert(err));
      
        axios.delete(settings.serverurl +'/room-inputs/' +this.props.room)
        .then(res => this.setState({ roomInputs:[]}))   
        .catch(err => alert(err));

        //alert(this.state.activity);
        axios.put(settings.serverurl +'/room/' +this.props.room, ({messageid: Date.now(), message:"NH", activity:this.state.activity, activitystate:"NEW"}))
            .catch(err => alert(err));

           
  }


  handleActivityChange ( eventKey) {

      //alert ( eventKey);
      var eventCode = null;
      if (eventKey==="0")
      {
        eventCode = "pp";    
      }
      else if (eventKey==="1")
      {
        eventCode = "ff";
        
      }
      else if (eventKey==="2")
      {
        eventCode = "www";
        
      }
      else if (eventKey==="3")
      {
        eventCode = "wwr";        
      }
      else if (eventKey==="4")
      {
        eventCode = "ii";        
      }

      //alert( eventCode);
      this.setState({activity: eventCode},this.handleReset);

  }
  
  handleActivityStateChange ( activityState) {

        //alert(this.state.activity);
    axios.put(settings.serverurl +'/room/' +this.props.room, ({messageid: Date.now(), message:"SC", activity:this.state.activity, activitystate:activityState}))
            .catch(err => alert(err));

    this.setState({activityState: activityState});

  }
  render() {

    var activityName = "-"
    var activityState = null;
    if (this.state.activity==="pp")
    {
      activityName = "Planning Poker"
    }
    else if (this.state.activity==="ff")
    {
      activityName = "Fist Of Five"
    }
    else if (this.state.activity==="www")
    {
      activityName = "What Went Well"
    }
    else if (this.state.activity==="wwr")
    {
      activityName = "What Went Wrong"
    }
    else if (this.state.activity==="ii")
    {
      activityName = "Improvement Ideas"
      if (this.state.activityState==="V")
      {
        activityState = "(Voting)";
      }
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
        <Col xs={6} md={6}>
        <h1 className = "activityHeader">{activityName}</h1>
        <h3>{activityState}</h3> 
        </Col>
        
        <Col xs={3} md={3}>
        <DropdownButton
          title={activityName}
          key={1}
          id={`dropdown-activty`}
        >
            <MenuItem eventKey="0" onSelect={this.handleActivityChange}>Planning Poker</MenuItem>
            <MenuItem eventKey="1"onSelect={this.handleActivityChange} >Fist of Five</MenuItem>
            <MenuItem eventKey="2" onSelect={this.handleActivityChange}>What Went Well</MenuItem>
            <MenuItem eventKey="3"onSelect={this.handleActivityChange} >What Went Wrong</MenuItem>
            <MenuItem eventKey="4"onSelect={this.handleActivityChange} >Improvement Ideas</MenuItem>
        </DropdownButton>
        </Col>
      </Row>

        <br/>

      {(this.state.activity=="pp") &&
        <PlanningPokerDealer cards = {this.state.playerInputs}  onReset = {this.handleReset} />
      }
      {(this.state.activity=="ff") &&
        <FistOfFiveDealer cards = {this.state.playerInputs}  onReset = {this.handleReset} />
      }
      {(this.state.activity=="www") &&
        <InputListDealer roomInputs = {this.state.roomInputs}  onReset = {this.handleReset} />
      }
      {(this.state.activity=="wwr") &&
        <InputListDealer roomInputs = {this.state.roomInputs}  onReset = {this.handleReset} />
      }
      {(this.state.activity=="ii") &&
        <VotingListDealer roomInputs = {this.state.roomInputs}  onReset = {this.handleReset} playerInputs = {this.state.playerInputs}
          activityState={this.state.activityState} onActivityStateChange = {this.handleActivityStateChange}/>
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
