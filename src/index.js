import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import Dealer from './Dealer';
import TeamMemberView from './TeamMemberView';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Lobby from './Lobby';



ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/index.html" component={App}/>
            <Route path="/dealer" component={Dealer}/>
            <Route path="/lobby" component={Lobby}/>            
            <Route path="/room/:id" render={(props) => <TeamMemberView room={props.match.params.id}/>} />
        </div>
    </Router>
), document.getElementById('root'))



 registerServiceWorker();
