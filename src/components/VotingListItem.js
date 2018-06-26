import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Label } from 'react-bootstrap';


export default class VotingListItem extends React.Component{
    
    constructor(props) {
        super(props);
    }


    render() {        

        const leftDivStyle = {
            "text-align": "left",
            "margin-top":"5px"
        };
        const rightDivStyle = {
            "text-align": "right"
            
        };
        const roomInputId = this.props.roomInputId;
        
        var votesLeft = this.props.remainingVotes>0;
        var zeroVotes= this.props.votes===0;
        return (
            
                <Grid>
            <Row>
                <Col hidden-xs hidden-sm md={1} lg={1}/>
                <Col xs={3} sm={3} md={1} lg={1}>
                <div className="VotingButtons" style ={rightDivStyle}>
                    {votesLeft?(
                    <span className="VotingButtonArrow" onClick={ (e) => { this.props.onChange (roomInputId,this.props.votes+1) }}>▲</span>):
                        (<span className="VotingButtonArrowDisabled">▲</span>)}
                    <Label>{this.props.votes}</Label>
                    {!zeroVotes?(
                    <span className="VotingButtonArrow" onClick={ (e) => { this.props.onChange (roomInputId,this.props.votes-1) }}>▼</span>):
                        (<span className="VotingButtonArrowDisabled">▼</span>)}
                    
                </div>
                </Col>
                <Col xs={6} sm={6} md={9} lg={9}>
                <div style ={leftDivStyle}>
                    {this.props.text}   
                    <br/>
                    <br/>
                    </div>    
                </Col>
                
            </Row>
            </Grid>
            
        );
       
    }
}

