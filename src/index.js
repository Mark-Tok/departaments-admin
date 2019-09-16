import React from 'react';
import ReactDOM from 'react-dom';
import Departaments from './admin/Departaments';
import Authorization from './authorization/index'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './stores/storesIndexDb.js'

ReactDOM.render(
<BrowserRouter><Authorization />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
