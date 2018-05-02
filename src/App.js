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
  <Col md={3} mdPush={3}/>
    <Col md={3} mdPush={3}>

        
        <Thumbnail href="/team"  src="/Team.jpg">
                    <h3>
                    Team Member  
        </h3> 
        </Thumbnail>
    </Col>
    <Col md={3} mdPull={3}>
    <Thumbnail href="/dealer"  src="/Facilitator.jpg">
                    <h3>
                    Facilitator 
        </h3> 
        </Thumbnail>
    </Col>
  </Row>
</Grid>






      </div>
    );
  }
}


export default App;
