import React, { Component } from 'react';
import Hand from "./Hand";
import RoomChooser from "./RoomChooser";
import axios from 'axios';
import { Button } from 'react-bootstrap';
var settings = require( './settings');

export default class FistOfFiveDealer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {cards:[], faceDown:true};
    }

    loadData()
    {

        if (this.props.room != null)
        {
            axios.get(settings.serverurl+'/player-inputs/'+this.props.room )
                .then(res => this.setState({ cards:res.data.Items }))
                .catch(err => console.log(err));
        }
    }

    showCards()
    {
        this.setState({faceDown:false});
    }
    newHand()
    {
        
        //delete user card?  TODO: Is this necessary?
        axios.delete(settings.serverurl +'/player-inputs/' +this.props.room)
            .catch(err => alert(err));
        

        axios.put(settings.serverurl +'/room/' +this.props.room, ({messageid: Date.now(), message:"NH"}))
            .catch(err => alert(err));

        this.setState({ cards:[], faceDown:true });
        
    }

    componentDidMount(){

        this.loadData();

        this.interval = setInterval(() => {
            this.loadData()}
        , 1000 * 1)

    }

    render() {
        const hasCards = this.state.cards.length>0;

        return (
            <div className="Cards">


                {this.state.cards.map(c => <Hand key={c.id} itemvalue = {c.Card} faceDown={this.state.faceDown}></Hand>)}
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
