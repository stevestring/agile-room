import React, { Component } from 'react';
import './App.css';
import PlanningPoker from './activities/PlanningPoker.js';
import FistOfFive from './activities/FistOfFive.js';
import WhatWentWell from "./activities/WhatWentWell";
//import WhatWentWrong from "./activities/WhatWentWrong";
import axios from "axios/index";
import NavBar from "./NavBar";
import RoomHeader from "./RoomHeader";
import {subscribeToRoomChanges} from './api.js';
var settings = require( './settings');

class TeamMemberView extends Component {

  constructor(props) {
    super(props);
    this.state = {activty:null, lastMessageId:null};

    subscribeToRoomChanges(this.props.room, (err,room) => this.loadData());
  }

  render() {

    if (this.state.activty===null)
    {
      return (      
          <div className="App">
            <NavBar room={this.props.room}/>          
          </div>
      );
    }

    else if (this.state.activty==="pp")
    {
      return (      
          <div className="App">
            <NavBar room={this.props.room}/>  
            <h1>Planning Poker</h1>
            <PlanningPoker ref="child" room={this.props.room}/>
          </div>
      );
    }
    else if (this.state.activty==="ff")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <h1>Fist Of Five</h1>
          <FistOfFive ref="child" room={this.props.room}/>
        </div>
    );
    }
    else if (this.state.activty==="www")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <h1>What Went Well</h1>
          <WhatWentWell ref="child" room={this.props.room}/>
        </div>
    );
    
    }

  }
  componentDidMount(){        
    this.loadData();
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
              if (res.data.Activity != this.state.Activity ){ //Is there a new message
                {
                  this.setState({activty:res.data.Activity});                  
                }
              }

              // alert(res.data.MessageId +";"+ this.state.lastMessageId);
              if (res.data.MessageId != this.state.lastMessageId ){ //Is there a new message                  
                if (res.data.Message=="NH") //New Hand
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
