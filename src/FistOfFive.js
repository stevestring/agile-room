import React, { Component } from 'react';
import Hand from "./Hand";
import axios from 'axios';
var settings = require( './settings');

export default class FistOfFive extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedItem:null, player: Math.floor(Math.random()*1000), lastMessageId:null};
        this.handleRoomChange = this.handleRoomChange.bind(this);
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

    componentDidMount(){

        
        this.loadData();
        this.interval = setInterval(() => {
            this.loadData()}
        , 1000 * 2)
    }

    handleRoomChange(event)
    {
        this.setState({room: event});
    }

    loadData(){

        if (this.props.room !=null)
        {
            axios.get(settings.serverurl+'/room/'+ this.props.room )
                .then(res => {

                    // alert(res.data.MessageId +";"+ this.state.lastMessageId);
                    if (res.data.MessageId != this.state.lastMessageId ){ //Is there a new message
                        
                        if (res.data.Message=="NH") //New Hand TODO: Change this generic name
                        {

                            this.setState({  selectedItem:null, lastMessageId : res.data.MessageId})//We processed the message
                        }
                            
                    }
                })
                .catch(err => console.log(err))
        }

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
