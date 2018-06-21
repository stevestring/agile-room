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
import RoomInputForm from "../components/RoomInputForm";
var uuid = require('uuid');


var settings = require( '../settings');

export default class InputList extends React.Component{
    constructor(props) {
        super(props);
        this.state = { lastMessageId:null};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    reset(){ 
        this.setState({userInput : ""});
    }

    handleSubmit(userInput) {

        var that = this;
        //alert ("Submitting: "+this.state.userInput);
        // var uuid1 = uuid.v1();

        var uuid1 = Math.floor(Math.random()*10000);
        // //Call API
        axios.put((settings.serverurl+'/room-input/'+this.props.room +'/'+uuid1), ({Input: userInput}))
        .then(function (response) {     
            
        })
        .catch(function (error) {
            console.log(error);
            alert (JSON.stringify(error));
        });

    }

    loadData(){

        if (this.props.room !=null)
        {
            axios.get(settings.serverurl+'/room/'+ this.props.room )
                .then(res => {

                    if (res.data.MessageId != this.state.lastMessageId ){ //Is there a new message
                        
                        if (res.data.Message=="NH") //New Hand TODO: Change this generic name
                        {

                            this.setState({  userInput:null, lastMessageId : res.data.MessageId})//We processed the message
                        }
                            
                    }
                })
                .catch(err => console.log(err))
        }

    }

    render() {

        return (
            <div>
                <br/>
                <br/>
                <div/>
                        <RoomInputForm onSubmit={this.handleSubmit}/>
            </div>

        );
    }
}
