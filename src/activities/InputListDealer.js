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

        // alert (inputs);
        return (
            <div className="Cards">


                {inputs.map(c => <ListItem text={c.Input} faceDown={this.state.faceDown}></ListItem>)}
                {hasInputs?(                
                    
                    <p><br/>
                        <Button onClick={()=>this.reset()}>Reset</Button> &nbsp;
                        <Button onClick={()=>this.showCards()}>Show</Button>
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
