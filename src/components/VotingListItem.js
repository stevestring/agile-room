import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
export default class VotingListItem extends React.Component{
    
    constructor(props) {
        super(props);
    }


    render() {        

        const leftDivStyle = {
            "text-align": "left"
        };
        const rightDivStyle = {
            "text-align": "right"
        };
        const roomInputId = this.props.roomInputId;

        return (
            <div style ={leftDivStyle}>
                <Grid>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}/>
                <Col xs={2} sm={2} md={2} lg={2}>
                <FormGroup style ={rightDivStyle}>
                <Radio name={roomInputId} inline onClick={ (e) => { this.props.onChange (roomInputId,0) }}>
                    0
                </Radio>{' '}
                <Radio name={roomInputId} inline onClick={ (e) => { this.props.onChange (roomInputId,1) }}>
                    1
                </Radio>{' '}
                <Radio name={roomInputId} inline onClick={ (e) => { this.props.onChange (roomInputId,2) }}>
                    2
                </Radio>{' '}
                <Radio name={roomInputId} inline onClick={ (e) => { this.props.onChange (roomInputId,3) }}>
                    3
                </Radio>
                </FormGroup>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                {this.props.text}   
                </Col>
            </Row>
            </Grid>
            </div>
        );
       
    }
}

