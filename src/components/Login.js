import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';


export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userInput : "", loggedIn:false};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }


    reset(){ 
        this.setState({userInput : ""});
    }

    handleSubmit() {
        
        //this.setState({userInput: ""});
        //alert(this.props.password);
        if (this.state.userInput==this.props.password)
        {
            this.props.onSubmit(this.state.userInput);
        }
        else{
            alert("Incorrect Password");
        }
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
                <h1>This room has a password</h1> 
                <br/>
                <div/>
                        <Grid>     
                                             
                        <FormGroup >
                        <InputGroup>
                        <FormControl  type="text" value = {this.state.userInput} onKeyUp={this.handleKeyUp} onChange={this.handleInputChange}/>                        
                        <InputGroup.Button>
                            <Button type="button" onClick={this.handleSubmit}>Login</Button>
                        </InputGroup.Button>
                        </InputGroup>
                        </FormGroup>                        
                        </Grid>
            </div>

        );
    }
}
