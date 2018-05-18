import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
// import NavBar from './NavBar';

export default class RoomHeader extends React.Component{
    constructor(props) {
        super(props);
        
    }  

    render() {
        
            return (
                <div>
                    {/* <NavBar/> */}
                    <PageHeader className="Room-header">
                    Room:  {this.props.room}
                   {/* <h1 className="App-title">Room: {this.props.room}</h1> */}
                   
                   </PageHeader>
                </div>
             );

    }
}

