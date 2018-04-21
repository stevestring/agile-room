import React, { Component } from 'react';
import Card from "./Card";
import axios from 'axios';
var settings = require( './settings');

export default class PlayerHand extends React.Component{
    constructor(props) {
        super(props);
        this.state = {user: null,selectedCard:null};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(param, e)  {
        this.setState({text: param,selectedCard:param});

        axios.put((settings.serverurl+'/player-card/'+this.state.user), ({card: param}))
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

        this.setState({user: Math.floor(Math.random()*1000)});

        this.interval = setInterval(() => {
            this.loadData()}
        , 1000 * 2)
    }

    loadData(){
        axios.get(settings.serverurl+'/player-card/'+this.state.user)
            .then(res => this.setState({ text: res.data.card, selectedCard:res.data.card }))
            .catch(err => console.log(err))

            // alert(this.state.selectedCard);
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
            <div className="Cards">
                

                <p className="App-intro">
                {userPrompt}
                </p>   
                <h1>{this.state.user}</h1>
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
