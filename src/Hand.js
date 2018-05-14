import React, { Component } from 'react';

export default class Hand extends React.Component{
    render() {

        //TODO: Fix card type... Card shouldnt know about other cards
        let cardType = this.props.selectedItem ===this.props.itemvalue  ? ('SelectedHand') : ( 'Hand');

        if (this.props.faceDown) {

            return (
                <div className={cardType} onClick={this.props.onClick}>
                <img width="50px" src="/fist.png"/>
                    <br/>
                </div>
            );
        }
        else {
            var imageToUse = "/fist.png";

            // alert (this.props.itemvalue + ":" + (this.props.itemvalue == "1"));
            if (this.props.itemvalue == "1")
            {
                imageToUse = "/one-finger.png";
            } 
            else if (this.props.itemvalue == "2")
            {
                imageToUse = "/two-fingers.png";
            }
            else if (this.props.itemvalue == "3")
            {
                imageToUse = "/three-fingers.png";
            }
            else if (this.props.itemvalue == "4")
            {
                imageToUse = "/four-fingers.png";
            }
            else if (this.props.itemvalue == "5")
            {
                imageToUse = "/five-fingers.png";
            }

            return (
                <div className={cardType} onClick={this.props.onClick}>
                <img width="50px" src={imageToUse}/>
                    {/* {this.props.itemvalue} */}
                </div>
            );
        }
    }
}

