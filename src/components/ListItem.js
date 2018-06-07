import React, { Component } from 'react';

export default class ListItem extends React.Component{
    render() {


        if (this.props.faceDown) {
            return (
                <div>
                    <h3>{"x".repeat(5)}</h3>
                </div>
            );
        }
        else {
            return (
                <div>
                <h3>{this.props.text}</h3>                                
                </div>
            );
        }
    }
}

