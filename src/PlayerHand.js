import React, { Component } from 'react';
import Card from "./Card";
import RoomChooser from "./RoomChooser";
import axios from 'axios';
var settings = require( './settings');

export default class PlayerHand extends React.Component{
    constructor(props) {
        super(props);
        this.state = {room: null, player: null,selectedCard:null};
        this.handleClick = this.handleClick.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
    }

    handleClick(param, e)  {
        this.setState({text: param,selectedCard:param});

        axios.put((settings.serverurl+'/player-card/'+this.state.room +'/'+this.state.player), ({Card: param}))
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                alert (error);
            });
    }

    componentDidMount(){

        this.loadData();

        this.setState({player: Math.floor(Math.random()*1000)});

        this.interval = setInterval(() => {
            this.loadData()}
        , 1000 * 2)
    }

    loadData(){

        if (this.state.room !=null)
        {
            axios.get(settings.serverurl+'/player-card/'+ this.state.room +'/'+ this.state.player)
                .then(res => {
                    if (res.data.Card==null)
                    {
                        this.setState({  selectedCard:null })
                    }
                })
                .catch(err => console.log(err))
        }
            // alert(this.state.selectedCard);
    }

    handleRoomChange(event)
    {
        this.setState({room: event});
    }

    render() {
        {/* TODO: Move userPrompt out of component */}
        let userPrompt; 
        if (this.state.selectedCard == null)
        {
            userPrompt = 'Choose a card!';
        }
        else
        {
            userPrompt = 'Wait for Dealer...';
        }


        return (
            <div>
                <br/>
                <p className="App-intro">
                    <RoomChooser onChange={this.handleRoomChange}/>  
                </p> 
                <p className="App-intro">             
                    {userPrompt}
                </p>   
                <h1>{this.state.player}</h1>
                <div/>
                <Card selectedCard={this.state.selectedCard} text = '1/2' onClick={(e) => this.handleClick( '1/2')}/>
                <Card selectedCard={this.state.selectedCard} text = '1' onClick={(e) => this.handleClick( '1')}/>
                <Card selectedCard={this.state.selectedCard} text = '2' onClick={(e) => this.handleClick( '2')}/>
                <Card selectedCard={this.state.selectedCard} text = '3' onClick={(e) => this.handleClick( '3')}/>
                <Card selectedCard={this.state.selectedCard} text = '5' onClick={(e) => this.handleClick( '5')}/>
                <Card selectedCard={this.state.selectedCard} text = '8' onClick={(e) => this.handleClick( '8')}/>
                <Card selectedCard={this.state.selectedCard} text = '15' onClick={(e) => this.handleClick( '15')}/>


            </div>


        );
    }
}
