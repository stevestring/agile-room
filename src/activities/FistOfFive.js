import React, { Component } from 'react';
import Hand from "../components/Hand";
import axios from 'axios';
var settings = require( '../settings');

export default class FistOfFive extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedItem:null, lastMessageId:null};
    }

    handleClick(param, e)  {        

        if (this.props.player !=  null)
        {
            axios.put((settings.serverurl+'/player-input/'+this.props.room +'/'+this.props.player), ({Card: param}))
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


    render() {
        {/* TODO: Move userPrompt out of component */}
        let userPrompt; 
        if (this.state.selectedItem == null)
        {
            userPrompt = 'Choose a Hand';
        }
        else
        {
            userPrompt = 'Wait for Team...';
        }


        return (
            <div>
                <br/>
                
                    {/* <RoomChooser onChange={this.handleRoomChange}/>   */}
                    
                {/* TODO: Show played cards - need to break down component*/}
                {/* <PlayedCards></PlayedCards> */}
                <p className="App-title">             
                    {userPrompt}
                </p>   

                <div/>
                <Hand selectedItem={this.state.selectedItem} itemvalue = '1' onClick={(e) => this.handleClick( '1')}/>
                <Hand selectedItem={this.state.selectedItem} itemvalue = '2' onClick={(e) => this.handleClick( '2')}/>
                <Hand selectedItem={this.state.selectedItem} itemvalue = '3' onClick={(e) => this.handleClick( '3')}/>
                <Hand selectedItem={this.state.selectedItem} itemvalue = '4' onClick={(e) => this.handleClick( '4')}/>
                <Hand selectedItem={this.state.selectedItem} itemvalue = '5' onClick={(e) => this.handleClick( '5')}/>

            </div>


        );
    }
}
