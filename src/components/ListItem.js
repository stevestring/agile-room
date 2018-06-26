import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
export default class ListItem extends React.Component{
    render() {

        var itemText = this.props.text;
        if  (this.props.faceDown)
        {
            itemText = "x".repeat(5);
        }
        const leftDivStyle = {
            "text-align": "left",
            "margin-top":"5px"
        };
        const rightDivStyle = {
            "text-align": "right"
        };
        //TODO: should this really be two components?
        if (this.props.votes !== null) {
            return (
                <Grid>
                <Row>   
                <Col hidden-xs hidden-sm md={1} lg={1}/>
                <Col xs={2} sm={2} md={1} lg={1}>
                    <div className="VotingButtons" style ={rightDivStyle}>
                    <Label> {this.props.votes}</Label>
                    </div>
                </Col>
                <Col xs={7} sm={7} md={9} lg={9}>
                <div style ={leftDivStyle}>
                    {this.props.text} <br/><br/>
                    </div>
                </Col>
                </Row>
                </Grid>
            );
        }
        else {
            return (
                <div>
                    <div>{this.props.votes +":"+ this.props.text}</div>                                 
                </div>
            );
        }
        
    }
}

