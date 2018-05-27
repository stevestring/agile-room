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
var uuid = require('uuid');


var settings = require( '../settings');

export default class WhatWentWell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userInput:"", lastMessageId:null};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    handleSubmit() {
        var that = this;
        //alert ("Submitting: "+this.state.userInput);
        var uuid1 = uuid.v1();
        // //Call API
        axios.put((settings.serverurl+'/room-input/'+this.props.room +'/'+uuid1), ({Input: this.state.userInput}))
        .then(function (response) {     
            that.setState({userInput:""});
        })
        .catch(function (error) {
            console.log(error);
            alert (error);
        });

            

    }

    handleInputChange(event)
    {
        this.setState({userInput: event.target.value});
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
                <br/>
                <div/>

                        <Form inline >
                        <FormGroup bsSize="large"  >
                            <FormControl  type="text" value = {this.state.userInput} onChange={this.handleInputChange}/>{" "}
                            <Button type="button" bsSize="large" onClick={()=> this.handleSubmit()}>Submit</Button>
                        </FormGroup>
                    </Form>

            </div>

        );
    }
}
