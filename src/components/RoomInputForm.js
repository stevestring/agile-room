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

export default class RoomInputForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userInput:""};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }


    reset(){ 
        this.setState({userInput : ""});
    }

    handleSubmit() {
        this.props.onSubmit(this.state.userInput);
        this.setState({userInput: ""});
    }

    handleInputChange(event)
    {
        this.setState({userInput: event.target.value});
    }


    handleKeyUp(event) {
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
