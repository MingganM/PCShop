import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// COMPONENTS:
import Nav from './Components/Nav';
// PAGES:
import Home from './Pages/Home'
import Product from './Pages/Product';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import StartPoint from './Pages/StartPoint';

class App extends Component {
  
  toggleNav(){
    const nav = document.querySelector('.nav__ul');
    nav.classList.toggle('display-nav');
  }

  render(){
    return(
      <>
        <Nav toggleNav={this.toggleNav}/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/:product" component={Product}/>
          <Route exact path="/Category/:category" component={Category}/>
          <Route path="/Get-Started" component={StartPoint}/>
          <Route path="/Cart" component={Cart}/>
        </Switch>
      </>
    )
  }
}

export default App;
