import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
export default class Room extends React.Component{
    render() {

            return (
                <div className='roomButton'>
                    <Thumbnail href={"/"+this.props.roomType+"/"+this.props.room}  src="/Team.jpg" responsive ="true" >
                        <h4>
                            Room {this.props.room}  
                        </h4> 
                    </Thumbnail>
                </div>

            );

    }
}

