import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import RoomHeader from "./RoomHeader";
export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        
    }  
  
    render() {
        const hasRoom = this.props.room != null;



            return (
                <div>
                    <Navbar inverse >
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="/">Agile Room</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {/*<NavItem eventKey={1} href="#">
                        Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        Link
                        </NavItem>
                         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar>                
                    {hasRoom? (
                    <RoomHeader room={this.props.room}/>):(<div/>)}
                </div>
            );
            
    }
}

