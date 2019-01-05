import React, { Component } from 'react';
import './App.css';
import axios from "axios/index";
import RoomChooser from "./RoomChooser";
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
import Room from "./Room";
import ActivityHeader from '../src/components/ActivityHeader';

var settings = require( './settings');
class Lobby extends Component {

  constructor(props) {
    super(props);
    this.state = {rooms:[] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    this.loadData();

    this.interval = setInterval(() => {
        this.loadData()}
    , 1000 * 2)

  }
  loadData()
  {

          axios.get(settings.serverurl+'/room' )
              .then(res => this.setState({ rooms:res.data.Items }))
              .catch(err => console.log(err));

  }

  render() {


    //TODO: This shouldn't be on every render
    this.state.rooms.sort(function(a,b) {return (a.Datemodified < b.Datemodified) ? 1 : ((b.Datemodified < a.Datemodified) ? -1 : 0);} );

    return (
      
      <div className="App">
      <NavBar/>
      <ActivityHeader activityName="Main Lobby"/>
                    <p className="App-title">             
                        Select a Room...
                    </p> 
        <br/>
        <br/>
                <Grid>
                <Row>
                {this.state.rooms.map(r => <Room room={r.RoomId} roomName={r.Name} roomType='room'></Room>)}


</Row>

                    </Grid>
      </div>
    );
  }

  handleChange(event)
  {
      //alert ("room changed")
      this.setState({room: event.target.value});
      
  }
  handleSubmit(event) {
    // alert ("form submit");
    // alert ("~/room/"+this.state.room);
    //window.location.href ="/room/"+this.state.room; 
    this.props.history.push("/room/"+this.state.room);
    
}
}


export default Lobby;
