/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReportWebVitals from './ReportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Auth';

ReportWebVitals();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
ReportWebVitals();
