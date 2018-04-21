import React, { Component } from 'react';
import Card from "./Card";
import axios from 'axios';
var settings = require( './settings');

export default class PlayedCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {cards:[], faceDown:true};

    }

    loadData()
    {
        axios.get(settings.serverurl+'/hand')
            .then(res => this.setState({ cards:res.data.Items }))
            .catch(err => console.log(err));
    }

    showCards()
    {
        this.setState({faceDown:false});
    }
    newHand()
    {

        axios.delete(settings.serverurl+'/hand')
            .catch(err => alert(err));

        this.setState({ cards:[], faceDown:true });

    }

    componentDidMount(){

        this.loadData();

        this.interval = setInterval(() => {
            this.loadData()}
        , 1000 * 2)

    }

    render() {
        return (
            <div className="Cards">
                    {this.state.cards.map(c => <Card key={c.id} text = {c.card} faceDown={this.state.faceDown}></Card>)}
             <p>
                 <button onClick={()=>this.newHand()}>New Hand</button>
                 <button onClick={()=>this.showCards()}>Show Cards</button>
             </p>
            </div>

        );
    }
}
