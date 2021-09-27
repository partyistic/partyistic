import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider } from './Auth'


// ReactDOM.render(
//   <React.StrictMode>
//    <AuthProvider  >   
//       <App  />   
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


reportWebVitals();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider  >   
      <App  />   
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
