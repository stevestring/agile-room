import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
export default class Room extends React.Component{
    render() {

            return (
                <div className='roomButton'>
                    <Thumbnail href={"/room/"+this.props.room}  src="/Team.jpg" responsive ="true" >
                        <h4>
                            Room {this.props.room}  
                        </h4> 
                    </Thumbnail>
                </div>
                // <div className='roomButton'>
                //     <a href={"/room/"+this.props.room}>
                //         {/* <div className= 'roomButton'> */}
                //         {this.props.roomName}
                //         <p>
                //             {this.props.room}
                //         </p>
                //         {/* </div> */}
                //     </a>
                // </div>
            );

    }
}

