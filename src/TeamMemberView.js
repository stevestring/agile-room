import React, { Component } from 'react';
import './App.css';
import PlanningPoker from './activities/PlanningPoker.js';
import FistOfFive from './activities/FistOfFive.js';
import InputList from "./activities/InputList";
import axios from "axios/index";
import NavBar from "./NavBar";
import {subscribeToRoomChanges} from './api.js';
import ActivityHeader from '../src/components/ActivityHeader';
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
            <ActivityHeader activityName="Planning Poker"/>
            <PlanningPoker ref="child" room={this.props.room}/>
          </div>
      );
    }
    else if (this.state.activty==="ff")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="Fist Of Five"/>
          <FistOfFive ref="child" room={this.props.room}/>
        </div>
    );
    }
    else if (this.state.activty==="www")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="What Went Well?"/>
          <InputList ref="child" room={this.props.room}/>
        </div>
    );    
    }
    else if (this.state.activty==="wwr")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <ActivityHeader activityName="What Went Wrong?"/>
          <InputList ref="child" room={this.props.room}/>
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
              if (res.data.Activity !== this.state.Activity ){ //Is there a new message
                {
                  this.setState({activty:res.data.Activity});                  
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
