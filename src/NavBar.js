import React, { Component } from 'react';
import './App.css';
import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import RoomHeader from "./RoomHeader";


export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        
    }  
  
    render() {
        const hasRoom = this.props.room != null;
        const isDealer = this.props.dealer != null;
            return (
                <div>
                    <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="/" ><div className="brand">Team Room</div></a>
                        </Navbar.Brand> 
                    </Navbar.Header>
                    {/* <Navbar.Text>
                    Online collaboration tools for Agile teams
                    </Navbar.Text> */}



                    </Navbar>                
                    {hasRoom? (
                    // <RoomHeader room={this.props.room}/>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
      <Panel.Title componentClass="h3">Room: {this.props.room} </Panel.Title>
    </Panel.Heading>

    </Panel>
                    ):(<div/>)
                    }
                </div>
            );
            
    }
}

