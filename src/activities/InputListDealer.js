import React, { Component } from 'react';
import Hand from "../components/Hand";
import ListItem from "../components/ListItem";
import { Button } from 'react-bootstrap';
var settings = require( '../settings');

export default class InputListDealer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {faceDown:true};//Hide results until end
    }


     copyToClipboard(str) {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
          document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
          document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          document.getSelection().addRange(selected);   // Restore the original selection
        }
    }  

    reset()
    {
        
        // this.setState({ faceDown:true });
        this.props.onReset();
        
    }

    showCards()
    {
        this.setState({faceDown:false});
    }

    render() {
        const hasInputs = this.props.roomInputs.length>0;
        //const inputs = this.props.roomInputs.sort(function(a,b) {return (a.Datemodified < b.Datemodified) ? 1 : ((b.Datemodified < a.Datemodified) ? -1 : 0);} );
        const inputs = this.props.roomInputs.sort(function(a,b) {return (a.Datemodified > b.Datemodified) ? 1 : ((b.Datemodified > a.Datemodified) ? -1 : 0);} );

        const copyArray = inputs.map(a => a.Input);

        // alert (inputs);
        return (
            <div className="Cards">


                {inputs.map(c => <ListItem text={c.Input} faceDown={this.state.faceDown}></ListItem>)}
                {hasInputs?(                
                    
                    <p><br/>
                        <Button onClick={()=>this.reset()}>Reset</Button> &nbsp;
                        <Button onClick={()=>this.showCards()}>Show</Button> &nbsp;
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
