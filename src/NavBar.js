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
                   // <Navbar.Collapse>
                        <Nav pullRight >  
                             
                        <Navbar.Brand>
                        {/* Why is this a needed for font size? */}
                        <a href="" > 
                        <div className="brand">{this.props.room}</div>
                        </a>
                        </Navbar.Brand>                  
                        </Nav>      
                     //   </Navbar.Collapse>
                    ):(<div>
                          <Navbar.Collapse>
                          <Nav>
                        <NavItem eventKey={1} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={1} href="/faq">
                            FAQ
                        </NavItem>
                        </Nav>
                        </Navbar.Collapse>
                        </div>) //No Room # to show
                    } 

                    </Navbar> 
                    {/* <br/>                */}
                </div>
            );
            
    }
}

