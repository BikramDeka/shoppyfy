import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import StickyFooter from 'react-sticky-footer';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './component/Navbar.js';
import ProductCom from "./component/ProductCom.js";
import Cart from './component/Cart.js';
import Details from './component/Details.js';
import Default from './component/Default.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ProductCom}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/details" component={Details}/>
            <Route component={Default}/>
          </Switch>
        </React.Fragment>
      </Router>
      );
  }
}