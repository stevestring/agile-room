import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import Dealer from './Dealer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';



ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/dealer" component={Dealer}/>
        </div>
    </Router>
), document.getElementById('root'))



 registerServiceWorker();
