import React, { Component } from 'react';

export default class RoomChooser extends React.Component{
    constructor(props) {
        super(props);
        this.state = { room: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }  
  

    handleChange(event) {
        this.setState({room: event.target.value});
        this.props.onChange(event.target.value);
    }
    
    handleSubmit(event) {
        alert('A room was submitted: ' + this.state.room);
    }


    render() {
        if (this.state.room==null) {
            return (
                <div>
                <label>
                    Enter room: 
                    <input type="text" value={this.state.room} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </div>
            );
        }
        else {
            return (
                <div>
                   Room: {this.state.room}
                </div>
            );
        }
    }
}

