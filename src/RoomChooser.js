import React, { Component } from 'react';

export default class RoomChooser extends React.Component{
    constructor(props) {
        super(props);
        this.state = { room: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }  
  

    handleChange(event) {
        // this.setState({room: event.target.value});
    }
    
    handleSubmit(event) {
        const data = new FormData(event.target);
        // alert(data.get('room'));
        this.setState({room: data.get('room')});
        this.props.onChange(data.get('room'));
    }


    render() {
        if (this.state.room==null) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <p className="App-intro"> 
                        <label>
                            Enter room: 
                            <input name="room" type="text" value={this.state.room} onChange={this.handleChange} />
                            
                        </label>
                        <input type="submit" value="Submit"  />
                    </p>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p className="App-intro"> 
                   Room: {this.state.room}
                   </p>
                </div>
            );
        }
    }
}

