import React, { Component } from 'react';
import Hand from "./Hand";
import RoomChooser from "./RoomChooser";
import { Button } from 'react-bootstrap';
var settings = require( './settings');

export default class FistOfFiveDealer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {faceDown:true};
    }


    showCards()
    {
        this.setState({faceDown:false});
    }

    newHand()
    {
        
        this.setState({ faceDown:true });
        this.props.onReset();
        
    }

    render() {
        const hasCards = this.props.cards.length>0;

        return (
            <div className="Cards">


                {this.props.cards.map(c => <Hand key={c.id} itemvalue = {c.Card} faceDown={this.state.faceDown}></Hand>)}
                {hasCards?(                
                    
                    <p><br/>
                        <Button onClick={()=>this.newHand()}>New Hand</Button> &nbsp;
                        <Button onClick={()=>this.showCards()}>Show Hands</Button>
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
