import React, { Component } from 'react';
import RoomChooser from './RoomChooser';

export default class RoomHeader extends React.Component{
    constructor(props) {
        super(props);
        
    }  

    render() {
        
        // if (this.props.room==null) {
        //     return (
        //         <RoomChooser onChange={this.handleRoomChange}/>
        //     );
        // }
        // else {
            return (
                <div>
                    <header className="Room-header">
                    
                   <h1 className="App-title">Room: {this.props.room}</h1>
                   
                   </header>
                </div>
             );
        //  }
    }
}

