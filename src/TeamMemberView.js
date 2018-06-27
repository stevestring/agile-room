import React, { Component } from 'react';
import './App.css';
import PlanningPoker from './activities/PlanningPoker.js';
import FistOfFive from './activities/FistOfFive.js';
import InputList from "./activities/InputList";
import VotingList from "./activities/VotingList";
import axios from "axios/index";
import NavBar from "./NavBar";
import {subscribeToRoomChanges} from './api.js';
import ActivityHeader from '../src/components/ActivityHeader';
var settings = require( './settings');

class TeamMemberView extends Component {

  constructor(props) {
    super(props);
    this.state = {activity:null, lastMessageId:null, activityState:null, roomInputs:null, player:null};
    subscribeToRoomChanges(this.props.room, (err,room) => this.loadData());
    //subscribeToRoomInputChanges(this.props.room, (err,room) => this.loadRoomInputs());
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

  render() {

    if (this.state.activity===null)
    {
      return (      
          <div className="App">
            <NavBar room={this.props.room}/>          
          </div>
      );
    }

    else if (this.state.activity==="pp")
    {
      return (      
          <div className="App">
            <NavBar room={this.props.room}/>  
            <ActivityHeader activityName="Planning Poker"/>
            <PlanningPoker ref="child" room={this.props.room}/>
          </div>
      );
    }
    else if (this.state.activity==="ff")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="Fist Of Five"/>
          <FistOfFive ref="child" room={this.props.room}/>
        </div>
    );
    }
    else if (this.state.activity==="www")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="What Went Well"/>
          <InputList ref="child" room={this.props.room}/>
        </div>
    );    
    }
    else if (this.state.activity==="wwr")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="What Went Wrong"/>
          <InputList ref="child" room={this.props.room}/>
        </div>
    );    
    }
    else if (this.state.activity==="ii")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="Improvement Ideas"/>
          {/* <h1>{this.state.activityState}</h1> */}
          <VotingList ref="child" room={this.props.room} player ={this.state.player} roomInputs ={this.state.roomInputs} activityState = {this.state.activityState} maxVotes="3"/>
        </div>
    );    
    }
  }
  componentDidMount(){  
    var playerId =sessionStorage.getItem('player');
    //alert("getting player:" +playerId );
    // alert ( playerId==="null" );
    // alert("getting player:" +playerId );
    if ( playerId==="null" || playerId===null)
    {
      playerId = Math.floor(Math.random()*1000);      
      //alert("setting player:" +playerId );
      sessionStorage.setItem('player',playerId);
    }
    this.setState({player:playerId });
    //alert(this.state.player );
    this.loadData();
    this.loadRoomInputs();
  }

  resetActivity()
  {
    
    this.refs.child.reset();
  }



  loadData(){

    if (this.props.room !=null)
    {
        axios.get(settings.serverurl+'/room/'+ this.props.room )
            .then(res => {
              if (res.data.Activity !== this.state.Activity ){ //Is there a new message
                {
                  this.setState({activity:res.data.Activity});                  
                }
              }

              
              if (res.data.ActivityState !== this.state.activityState ){ //Is there a new ActivityState
                {
                  //alert(res.data.ActivityState);
                  this.setState({activityState:res.data.ActivityState},this.loadRoomInputs());  //Some rooms require room inputs for players (VotingList)  If game state changes, load roomInputs
                  
                }
              }

              // alert(res.data.MessageId +";"+ this.state.lastMessageId);
              if (res.data.MessageId !== this.state.lastMessageId ){ //Is there a new message                  
                if (res.data.Message==="NH") //New Hand
                {
                    this.setState({ lastMessageId : res.data.MessageId})//We processed the message
                    this.resetActivity();
                }                    
              }
            })
            .catch(err => console.log(err))
    }

    

}

}


export default TeamMemberView;
