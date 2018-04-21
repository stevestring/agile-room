import React, { Component } from 'react';

export default class BigCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text: new String()};
    }
    render() {
        return (
            <div className="BigCard">
                <a href="default.asp" target="_blank">{this.props.text}</a>
            </div>
        );
    }
}
