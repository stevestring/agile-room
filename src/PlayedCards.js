import React, { Component } from 'react';
import Card from "./Card";
import RoomChooser from "./RoomChooser";
import axios from 'axios';
var settings = require( './settings');

export default class PlayedCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {room:null, cards:[], faceDown:true};
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
        this.setState({ cards:[], faceDown:true });
        axios.delete(settings.serverurl +'/hand/' +this.props.room)
            .catch(err => alert(err));

        
    }

    componentDidMount(){

        this.loadData();

        this.interval = setInterval(() => {
            this.loadData()}
        , 1000 * 1)

    }

    render() {
        return (
            <div className="Cards">


                {this.state.cards.map(c => <Card key={c.id} text = {c.Card} faceDown={this.state.faceDown}></Card>)}
                <p>
                    <button onClick={()=>this.newHand()}>New Hand</button>
                    <button onClick={()=>this.showCards()}>Show Cards</button>
                </p>
            </div>

        );
    }
}
