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

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// import './index.css';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import App from './App';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Register from './components/Regester';
// import Login from './components/login';
// import Logout from './components/logout';

// const routing = (
// 	<Router>
// 		<React.StrictMode>
// 		<Header />
// 			 <Switch> 
// 				<Route exact path="/" component={App} />
// 				<Route path="/register" component={Register} />
// 				<Route path="/login" component={Login} />
// 				<Route path="/logout" component={Logout} />
// 			</Switch> 
// 			 <Footer />
// 		</React.StrictMode>
// 	</Router>
// );

// ReactDOM.render(routing, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
