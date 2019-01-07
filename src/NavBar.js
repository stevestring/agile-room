import React from 'react';

import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './App.css';

export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        
    }  
  
    render() {
        const hasRoom = this.props.room != null;

            return (
                <div>
                     <Navbar inverse>
                     
                        <Navbar.Brand>
                        <a href="/" ><div className="brand">Team Room</div></a>
                        </Navbar.Brand> 
                      
                    { hasRoom? (
                        <Nav pullRight >       
                        <Navbar.Brand>
                        <a href="/" ><div className="brand">Room: {this.props.room}</div></a>
                        </Navbar.Brand>                  
                        </Nav>      
                    ):(<div>
                          <Nav>
                        <NavItem eventKey={1} href="/about">
                            About
                        </NavItem>
                        </Nav>
                        </div>) //No Room # to show
                    } 

                    </Navbar> 
                    {/* <br/>                */}
                </div>
            );
            
    }
}

