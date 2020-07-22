import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// COMPONENTS:
import Nav from './Components/Nav';
// PAGES:
import Home from './Pages/Home'

class App extends Component {
  
  toggleNav(){
    const nav = document.querySelector('.nav__ul');
    nav.classList.toggle('flex');
  }

  render(){
    return(
      <>
        <Nav toggleNav={this.toggleNav}/>
        <Switch>
          <Route to="/" component={Home}/>
        </Switch>
      </>
    )
  }
}

export default App;
