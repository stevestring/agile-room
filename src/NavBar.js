import React, { Component } from 'react';

import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import RoomHeader from "./RoomHeader";
import './App.css';

export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        
    }  
  
    render() {
        const hasRoom = this.props.room != null;
        const isDealer = this.props.dealer != null;
        const style = "margin-right: 10px";

            return (
                <div>
                     <Navbar inverse  >
                     
                        <Navbar.Brand>
                        <a href="/" ><div className="brand">Team Room</div></a>
                        </Navbar.Brand> 
                       

                    { hasRoom? (
                       
                        <Nav pullRight >       
                                                <Navbar.Brand>
                        <a href="/" ><div className="brand">Room: {this.props.room}</div></a>
                        </Navbar.Brand>                  
                        {/* <NavItem eventKey={1} href="#" >Room: {this.props.room}</NavItem>                         */}
                        </Nav>  
                        
                                     
                    ):(<div/>)
                    } 

                    </Navbar> 
                    <br/>               
                    {/* {hasRoom? (

                    <Panel bsStyle="primary">
                        <Panel.Heading>
      <Panel.Title componentClass="h3">Room: {this.props.room} </Panel.Title>
    </Panel.Heading>

    </Panel>
                    ):(<div/>)
                    } */}
                </div>
            );
            
    }
}

