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
            itemText = "x".repeat(itemText.length);
        }
        const leftDivStyle = {
            "text-align": "left",
            "margin-top":"5px"
        };
        const rightDivStyle = {
            "text-align": "right"
        };
        //TODO: should this really be two components?
        //alert (this.props.votes);
        if (this.props.votes !== null && typeof this.props.votes !== "undefined") {
            return (
                <Grid>
                <Row>   
                <Col hidden-xs hidden-sm md={1} lg={1}/>
                <Col xs={2} sm={2} md={1} lg={1}>
                    <div className="VotingButtons" style ={rightDivStyle}>
                    <Label> {this.props.votes}</Label>
                    </div>
                </Col>
                <Col xs={8} sm={8} md={9} lg={9}>
                <div style ={leftDivStyle}>
                {itemText} <br/><br/>
                    </div>
                </Col>
                </Row>
                </Grid>
            );
        }
        else {
            return (
                <Grid>
                <Row>   
                <Col hidden-xs hidden-sm md={3} lg={3}/>
                <Col xs={6} sm={6} md={6} lg={6}>
                <div style ={leftDivStyle}>
                {itemText} <br/><br/>
                    </div>
                </Col>
                </Row>
                </Grid>
            );
        }
        
    }
}

