import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default class RoomChooser extends React.Component{
    constructor(props) {
        super(props);
        this.state = { room: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }  
  

    handleChange(event) {
        this.setState({room: event.target.value});
        //alert(event);
    }
    
    handleSubmit(event) {
        //const data = new FormData(event.target);
        // alert(data.get('roomNumber'));
        // this.setState({room: data.get('roomNumber')});
        // this.props.onChange(data.get('roomNumber'));
        this.setState({room: this.state.room});
        alert(this.state.room);
        this.props.onChangeRoom(this.state.room);
        event.stopPropagation();
    }


    render() {
        //if (this.state.room==null) {
            return (
                <div>
                    <br/>
                <Grid>
                
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="roomNumber" bsSize="lg">
                        <FormControl type="text" name="roomNumber" placeholder="Enter room number" onChange={this.handleChange}/>
                    </FormGroup>{' '}
                    <Button bsSize="lg" type="submit">Go</Button>
                </Form>
                

                    {/* <form onSubmit={this.handleSubmit}>
                    <p className="App-intro"> 
                        <label>
                            Choose room: 
                            <input name="room" type="text" value={this.state.room} onChange={this.handleChange} />
                            
                        </label>
                        <br/>
                        <input type="submit" value="Go"/>
                    </p>
                    </form> */}





                    </Grid>
                </div>
            );
            
    }
}

