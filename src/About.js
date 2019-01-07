import React, { Component } from 'react';
import './App.css';
import RoomHeader from "./RoomHeader";
import { FormGroup } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import NavBar from "./NavBar";
import ActivityHeader from '../src/components/ActivityHeader';

var settings = require( './settings');
class About extends Component {

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
      <ActivityHeader activityName="About Us"/>
      <br/>
      <br/>
      <Grid>
<div style ={leftDivStyle}>
<p>Team-room.com is set of online collaboration tools designed for Agile teams.  Some of the tools were designed to be used within specific agile ceremonies (Planning Poker, Fist of Five) but others could be useful for any type of collaborative meeting (What Went Well, Ideas for Improvement) </p>
<br/>
<p>Team-Room.com was designed around the premise that everybody on the team can view a shared "team" view that is managed by the scrummaster/facilitator and every team member also has their own laptop or mobile device though which they submit votes, ideas to the shared view. </p> 
<br/>
<p>I created team-room.com as a hobby in mid 2018... mostly to gain some experience with NodeJS, ReactJS, AWS.  As it started to take shape and I began using it with my team, I soon saw some real value in "digitizing" some of my favorite agile team activities.  As a scrummaster, I believe that face to face interactions are usually the most effective.  However, when we have team members in different offices or working remotely, this simply wasn't possible.  Team-room.com allowed my team to easily conduct agile exercises like Planning Poker from multiple locations with minimal setup.</p>   
<br/>
<p>After using (and iterating) team-room for a few months, I believe it actually became a better experience than conducting some of the exercises by hand.  When using the tool, setup and cleanup are essentially non-existent.  Results of the exercises are easily copy/pasted when we need to share the outcomes.  Perhaps the most surprising benefit lies in ability for team members to submit ideas and vote anonymously.</p>
<br/>
<p>I hope you enjoy using team-room.com for your team!  As long as I can manage the costs, it is free for anybody to use.  If you have a great experience, I'd love to hear your feedback.  This is a labor of love for me... learning, positive feedback, and satisfaction of building something that used by others is the primary motivation.</p>
<br/>
<p>*Special thanks to Ashley-Christian Hardy for the great images that I borrowed from <a href="https://medium.com/@achardypm">his Agile blog on Medium.</a></p>

        <br/>
        <br/>
        </div>
      </Grid>
      </div>
    );
  }

  
}


export default About;
