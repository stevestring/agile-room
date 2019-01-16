import React, { Component } from 'react';
import ActivityHeader from '../src/components/ActivityHeader';
import axios from "axios/index";
import NavBar from "./NavBar";
import './bootstrap.min.css';
import './App.css';
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Room from "./Room";
var settings = require( './settings');


class CreateRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {room: Math.floor(Math.random()*1000), activity:"pp", roomname:null,rooms:[] };
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.jumptoDealer = this.jumptoDealer.bind(this);
  }

  componentDidMount(){

    this.loadData();

  }

  handleRoomNameChange(event) {
    this.setState({roomname: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleActivityChange(event) {
    this.setState({activity: event.target.value});
  }


handleSubmit() {
    this.setState({roomname: this.state.roomname});
    this.setState({activity: this.state.activity});
    this.setState({password: this.state.password});
    var that = this;

    // //Call API
    axios.put((settings.serverurl+'/room/'+this.state.room ), {name: this.state.roomname, activity:this.state.activity, activitystate:0, password:this.state.password})
        .then( res=> that.props.history.push("/dealer/"+that.state.room)
      )    
    .catch(function (error) {
        console.log(error);
        alert (error);
    });

    return 0;
    
    
}

loadData()
{

        axios.get(settings.serverurl+'/room' )
            .then(res => this.setState({ rooms:res.data.Items }))
            .catch(err => console.log(err));

}

jumptoDealer()
{
    //Navgate to Dealer (Supply room)
    //alert (this.state.room);
    this.props.history.push("/dealer/"+this.state.room);
    
}

  render() {
    let subHeaderStyle = { fontSize: 32 }
    const inRoom = this.state.room != null;
    
    return (
      <div className="App">
      <NavBar room = {this.state.room}/>
      
      <ActivityHeader activityName="Create a Room"/>
                <br/>
                <br/>
        <Grid>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail" >
            <Col componentClass={ControlLabel} sm={4}>
            Room Name
            </Col>
            <Col sm={4}>
              <FormControl type="text" placeholder="Enter room name... " onChange={this.handleRoomNameChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalActivity">
            <Col componentClass={ControlLabel} sm={4}>
              Starting Activity
            </Col>
            <Col sm={4}>
            <FormControl componentClass="select" placeholder="Planning Poker" onChange={this.handleActivityChange}>
                                <option value="pp">Planning Poker</option>
                                <option value="ff">Fist Of Five</option>
                                <option value="www">What Went Well</option>
                                <option value="wwr">What What Wrong</option>
                                <option value="ii">Improvement Ideas</option>

                              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword" >
            <Col componentClass={ControlLabel} sm={4}>
            Password
            </Col>
            <Col sm={4}>
              <FormControl type="text" placeholder="Enter room password... " onChange={this.handlePasswordChange}/>
            </Col>
          </FormGroup>
          <FormGroup style={{textAlign: "left"}}>
            <Col smOffset={4} sm={4}>
              <Button type="button" onClick={this.handleSubmit}>OK</Button>
            </Col>
          </FormGroup>
      </Form>
        </Grid>

        <br/>
        <br/>
        <br/>
        <br/>
        <h1 style={subHeaderStyle} className = "activityHeader"  >Or... Select Existing Room</h1>
        
        <br/>
                <Grid>
                  <Row>
                  {this.state.rooms.map(r => <Room room={r.RoomId} roomName={r.Name} roomType='dealer'></Room>)}
                  </Row>
                </Grid>
      </div>
    );
  }

  handleRoomChange(event)
  {
      this.setState({room: event});
  }


}

export default CreateRoom;
