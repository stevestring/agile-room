import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import VotingListItem from "../components/VotingListItem";
var uuid = require('uuid');


var settings = require( '../settings');

export default class VotingList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userInput:"", player: Math.floor(Math.random()*1000), lastMessageId:null, votes:[]};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    reset(){ 
        this.setState({userInput : ""});
    }

    handleSubmit(event) {

        var that = this;
        //alert ("Submitting: "+this.state.userInput);
        // var uuid1 = uuid.v1();

        var uuid1 = Math.floor(Math.random()*10000);
        // //Call API
        axios.put((settings.serverurl+'/room-input/'+this.props.room +'/'+uuid1), ({Input: this.state.userInput}))
        .then(function (response) {     
            that.setState({userInput:""});
            event.preventDefault();
            event.stopPropagation();
        })
        .catch(function (error) {
            console.log(error);
            alert (error);
        });

        
    }

    handleVote(itemId, votes) {
        var that = this;
        //alert ("Voting: "+itemId + ":" + votes);
        var found = false;
        var item = {};
        item ["RoomInputId"] = itemId;
        item ["Votes"] = votes;

        var jsonObj = this.state.votes;

        let obj = jsonObj.find((o, i) => {
            if (o.RoomInputId === itemId) {
                jsonObj[i] = item;
                found= true; // stop searching
            }
        });

        if (!found)
        {
            jsonObj.push(item);
        }
        //alert (jsonObj);

        //alert(this.state.player);
        if (this.state.player !=  null)
        {
            axios.put((settings.serverurl+'/player-input/'+this.props.room +'/'+this.state.player), ({PlayerInput: jsonObj}))
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                    alert (error);
                });
        }
        this.setState({Votes:jsonObj});

    }

    handleInputChange(event)
    {
        this.setState({userInput: event.target.value});
    }

    handleKeyUp(event) {
        //alert (event.keyCode);
        if (event.keyCode === 13) //Enter key
        {
            this.handleSubmit();
        }
    }

    //TODO: This should be 2 components
    render() {

        //alert(this.props.roomInputs);
        if (this.props.activityState==="V" && this.props.roomInputs !== null )        
        {
            const inputs = this.props.roomInputs.sort(function(a,b) {return (a.Datemodified > b.Datemodified) ? 1 : ((b.Datemodified > a.Datemodified) ? -1 : 0);} );

            return (
                <div>
                    <p className="App-title">             
                        (Vote)
                    </p> 
                    <div className="Cards">
                        {inputs.map(c => <VotingListItem roomInputId = {c.RoomInputId} text={c.Input} faceDown={this.state.faceDown}  onChange={this.handleVote}>  </VotingListItem>)}
                    </div>
                </div>
            )
        }
        else {
        return (
            <div>
                <p className="App-title">             
                    (Team Input)
                </p>   
                <br/>
                <div/>
                    <Grid>                       
                        <FormGroup >
                        <InputGroup>
                        <FormControl  type="text" value = {this.state.userInput} onKeyUp={this.handleKeyUp} onChange={this.handleInputChange}/>                        
                        <InputGroup.Button>
                            <Button type="button" onClick={this.handleSubmit}>Submit</Button>
                        </InputGroup.Button>
                        </InputGroup>
                        </FormGroup>                        
                    </Grid>
            </div>

        )};
    }
}
