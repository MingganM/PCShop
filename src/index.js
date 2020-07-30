import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </Context>
  ,
  document.getElementById('root')
);