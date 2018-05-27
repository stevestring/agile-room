import React, { Component } from 'react';
import Hand from "../components/Hand";
import { Button } from 'react-bootstrap';
var settings = require( '../settings');

export default class WhatWentWellDealer extends React.Component{
    constructor(props) {
        super(props);
    }



    reset()
    {
        
        this.setState({ faceDown:true });
        this.props.onReset();
        
    }

    render() {
        const hasInputs = this.props.roomInputs.length>0;

        return (
            <div className="Cards">


                {this.props.roomInputs.map(c => <h3>{c.Input}</h3>)}
                {hasInputs?(                
                    
                    <p><br/>
                        <Button onClick={()=>this.reset()}>Reset</Button> &nbsp;
                        {/* <Button onClick={()=>this.showCards()}>Show Hands</Button> */}
                    </p>
                ):(
                    <p className="App-title">             
                        Waiting for players...
                    </p> 
                )}
            </div>

        );
    }
}
