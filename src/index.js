import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
axios.defaults.baseURL ="https://focusmrs.tech/focusmrs/api/";
axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
// import registerServiceWorker from './registerServiceWorker';

var startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
    <Router>
    <App />
  </Router>
  </React.StrictMode>,    
    document.getElementById('root'));
  // registerServiceWorker();
};

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}