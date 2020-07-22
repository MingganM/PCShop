import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter> 
  ,
  document.getElementById('root')
);