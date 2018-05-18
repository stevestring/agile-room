import React, { Component } from 'react';
import './App.css';
import PlanningPoker from './PlanningPoker.js';
import FistOfFive from './FistOfFive.js';
import axios from "axios/index";
import NavBar from "./NavBar";
import RoomHeader from "./RoomHeader";

var settings = require( './settings');

class TeamMemberView extends Component {

  constructor(props) {
    super(props);
    this.state = {activty:"pp"};
  }

  render() {

    if (this.state.activty=="pp")
    {
      return (      
          <div className="App">
            <NavBar room={this.props.room}/>  
            <h1>Planning Poker</h1>
            <PlanningPoker room={this.props.room}></PlanningPoker>
          </div>
      );
    }
    else if (this.state.activty=="ff")
    {
      return (      
        <div className="App">
          <NavBar room={this.props.room}/>  
          <h1>Fist Of Five</h1>
          <FistOfFive room={this.props.room}></FistOfFive>
        </div>
    );
    }


  }
  componentDidMount(){

        
    this.loadData();
    this.interval = setInterval(() => {
        this.loadData()}
    , 1000 * 2)
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
                // if (res.data.MessageId != this.state.lastMessageId ){ //Is there a new message
                    
                //     if (res.data.Message=="NH") //New Hand
                //     {

                //         this.setState({  selectedCard:null, lastMessageId : res.data.MessageId})//We processed the message
                //     }
                        
                // }
            })
            .catch(err => console.log(err))
    }

}

}


export default TeamMemberView;
