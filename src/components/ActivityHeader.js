import React, { Component } from 'react';

export default class ActivityHeader extends React.Component{
    render() {
        return (
            
            <div>
                <br/>
                
                <h1 className = "activityHeader">{this.props.activityName}</h1>      
                <br/>          
            </div>
        );

    }
}

