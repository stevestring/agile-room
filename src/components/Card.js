import React, { Component } from 'react';

export default class Card extends React.Component{
    render() {

        //TODO: Fix card type... Card shouldnt know about other cards
        let cardType = this.props.selectedItem ===this.props.text  ? ('Card selectedCard') : ( 'Card');

        if (this.props.faceDown) {
            cardType = 'Card faceDownCard'

            return (
                <div className={cardType} onClick={this.props.onClick}>
                    <br/>
                </div>
            );
        }
        else {
            return (
                <div className={cardType} onClick={this.props.onClick}>
                    {this.props.text}
                </div>
            );
        }
    }
}

