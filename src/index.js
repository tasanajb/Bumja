import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User5 from './User5';
import Postt from './Postt';
import Bum from './Bum';

//import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/home" component={App}/>
    <Route path="/user" component={User5}/>
    <Route path="/postt" component={Postt}/>
    <Route path="/bum" component={Bum}/>

    </Router>,document.getElementById('root')
);