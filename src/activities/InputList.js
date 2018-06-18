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
var uuid = require('uuid');


var settings = require( '../settings');

export default class InputList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userInput:"", lastMessageId:null};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }


    reset(){ 
        this.setState({userInput : ""});
    }

    handleSubmit() {

        var that = this;
        //alert ("Submitting: "+this.state.userInput);
        // var uuid1 = uuid.v1();

        var uuid1 = Math.floor(Math.random()*10000);
        // //Call API
        axios.put((settings.serverurl+'/room-input/'+this.props.room +'/'+uuid1), ({Input: this.state.userInput}))
        .then(function (response) {     
            that.setState({userInput:""});

        })
        .catch(function (error) {
            console.log(error);
            alert (JSON.stringify(error));
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

    handleKeyUp(event) {
        //alert (event.keyCode);
        if (event.keyCode === 13) //Enter key
        {
            this.handleSubmit();
        }
    }

    render() {

        return (
            <div>
                <br/>
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

        );
    }
}
