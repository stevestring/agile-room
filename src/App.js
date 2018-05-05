import React, { Component } from 'react';
import PlayerHand from './PlayerHand.js';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Code } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Agile Room</h1>
        </header>
<Grid>
<br/>
  <Row className="show-grid">


  <Col xs={3} sm={3} md={3} mdPush={3}/>
  <Col sm={3} md={3} mdPush={3}>

        
        <Thumbnail href="/lobby"  src="/Team.jpg" responsive ="true" >
                    <h3>
                    Team  
        </h3> 
        </Thumbnail>
        </Col>
    <Col sm={3} md={3} mdPull={3}>
    <Thumbnail href="/dealer"  src="/Facilitator.jpg"  responsive="true" >
                    <h3>
                    Facilitator 
        </h3> 
        </Thumbnail>
    </Col>
  </Row>
</Grid>

      </div>
    );
  };
};


export default App;
