import React, { Component } from 'react';
import Hand from "../components/Hand";
import ListItem from "../components/ListItem";
import { Button } from 'react-bootstrap';
var settings = require( '../settings');

export default class VotingListDealer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {faceDown:true};

    }

    copyToClipboard(str) {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Mape it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to mape it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
          document.getSelection().rangeCount > 0        // Checp if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Marp as false to pnow no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only worps as a result of a user action (e.g. clicp events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
          document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          document.getSelection().addRange(selected);   // Restore the original selection
        }
    }  

    reset()
    {
        
        this.props.onReset();
        
    }

    changeState()
    {
        
        this.props.onActivityStateChange("V");
        
    }

    showCards()
    {
        this.setState({faceDown:false});
    }

    render() {
        const hasInputs = this.props.roomInputs.length>0;
        const inputs = this.props.roomInputs.sort(function(a,b) {return (a.Datemodified > b.Datemodified) ? 1 : ((b.Datemodified > a.Datemodified) ? -1 : 0);} );
        
        var votes = inputs;

        const copyArray = inputs.map(a => a.Input); //TODO  What is this for?
        if (this.props.playerInputs !== null)
        {
            var found = false;
            
            for (let v = 0; v < votes.length; v++) { 
            votes[v]["votes"]=0;

                for (let i = 0; i < this.props.playerInputs.length; i++) { 
                    if (typeof this.props.playerInputs[i].PlayerInput !== "undefined")
                    {
                        for (let j = 0; j < this.props.playerInputs[i].PlayerInput.length; j++) { 

                                if (votes[v].RoomInputId === this.props.playerInputs[i].PlayerInput[j].RoomInputId) {
                                    votes[v].votes = votes[v].votes +this.props.playerInputs[i].PlayerInput[j].Votes;
                                }
                        }
                    }
                }
            } 
        }

        votes = votes.sort(function(a,b) {return (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0);} );

        //alert(JSON.stringify(votes));

        // alert (inputs);
        return (
            <div className="Cards">


                {votes.map(c => <ListItem votes = {c.votes} text={c.Input} faceDown={this.state.faceDown}></ListItem>)}
                {hasInputs?(                
                    
                    <p><br/>
                        <Button onClick={()=>this.reset()}>Reset</Button> &nbsp;
                        <Button onClick={()=>this.showCards()}>Show</Button> &nbsp;
                        <Button onClick={()=>this.changeState()}>Vote</Button> &nbsp;
                        <Button onClick={()=>this.copyToClipboard(copyArray.join("\n"))}>Copy</Button>
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
