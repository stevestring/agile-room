import React, { Component } from 'react';
import Card from "./Card";
import RoomChooser from "./RoomChooser";
import axios from 'axios';
import { Button } from 'react-bootstrap';
var settings = require( './settings');

export default class PlayedCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {cards:[], faceDown:true};
    }

    loadData()
    {

        if (this.props.room != null)
        {
            axios.get(settings.serverurl+'/hand/'+this.props.room )
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
        
        axios.delete(settings.serverurl +'/hand/' +this.props.room)
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


                {this.state.cards.map(c => <Card key={c.id} text = {c.Card} faceDown={this.state.faceDown}></Card>)}
                {hasCards?(                
                    <p>
                        <Button onClick={()=>this.newHand()}>New Hand</Button>
                        <Button onClick={()=>this.showCards()}>Show Cards</Button>
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
