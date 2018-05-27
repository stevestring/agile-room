import React, { Component } from 'react';
import Card from "../components/Card";
import axios from 'axios';
var settings = require( '../settings');

export default class PlanningPoker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedItem:null, player: Math.floor(Math.random()*1000)};
        //this.handleRoomChange = this.handleRoomChange.bind(this);
    }

    handleClick(param, e)  {
        

        if (this.state.player !=  null)
        {
            axios.put((settings.serverurl+'/player-input/'+this.props.room +'/'+this.state.player), ({Card: param}))
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                    alert (error);
                });
        }
        this.setState({text: param,selectedItem:param});
        
    }
  
    reset(){ 
        this.setState({selectedItem : null});
    }


    loadData(){

        if (this.props.room !=null)
        {
            axios.get(settings.serverurl+'/room/'+ this.props.room )
                .then(res => {
                })
                .catch(err => console.log(err))
        }

    }


    render() {
        {/* TODO: Move userPrompt out of component */}
        let userPrompt; 
        if (this.state.selectedItem == null)
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

                <p className="App-title">             
                    {userPrompt}
                </p>   

                <div/>
                <Card selectedItem={this.state.selectedItem} text = '1/2' onClick={(e) => this.handleClick( '1/2')}/>
                <Card selectedItem={this.state.selectedItem} text = '1' onClick={(e) => this.handleClick( '1')}/>
                <Card selectedItem={this.state.selectedItem} text = '2' onClick={(e) => this.handleClick( '2')}/>
                <Card selectedItem={this.state.selectedItem} text = '3' onClick={(e) => this.handleClick( '3')}/>
                <Card selectedItem={this.state.selectedItem} text = '5' onClick={(e) => this.handleClick( '5')}/>
                <Card selectedItem={this.state.selectedItem} text = '8' onClick={(e) => this.handleClick( '8')}/>
                <Card selectedItem={this.state.selectedItem} text = '15' onClick={(e) => this.handleClick( '15')}/>


            </div>


        );
    }
}
