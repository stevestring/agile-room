import React from 'react';
import './index.css';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App';
import Dealer from './Dealer';
import TeamMemberView from './TeamMemberView';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lobby from './Lobby';
import About from './About';
import FAQ from './FAQ';
import CreateRoom from './CreateRoom';
import NavBar from "./NavBar";


ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/index.html" component={App}/>
            <Route path="/lobby" component={Lobby}/>  
            <Route path="/create-room" component={CreateRoom}/>            
            <Route path="/room/:id" render={(props) => <TeamMemberView room={props.match.params.id}/>} />
            <Route path="/dealer/:id" render={(props) => <Dealer room={props.match.params.id}/>} />
            <Route path="/About" component={About}/>  
            <Route path="/faq" component={FAQ}/>  
        </div>
    </Router>
), document.getElementById('root'))



 registerServiceWorker();
