import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider , useAuth} from './Auth'
import LoginForm from '../src/components/LoginForm'
import { useState } from 'react'
import { getToken, fetcher } from './services/data-fetcher'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// reportWebVitals();

// ReactDOM.render(
//   <BrowserRouter>
//     <AuthProvider  >
//       {useAuth?
//       <App  />
//       :
//       <LoginForm/>
//       }
      
//     </AuthProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );


// ReactDOM.render(


// );



export default function Home() {
    const [token, setToken] = useState();

    const [username, setUsername] = useState('');

    // const [hooks, setHooks] = useState();

    async function loginHandler(credentials) {

        const fetchedToken = await getToken(credentials);

        // setHooks(fetcher(fetchedToken));

        setUsername(credentials.username);

        setToken(fetchedToken);
    }

    function logoutHandler() {
        setToken(null);
        setUsername('');
        // setHooks(null);
    }

    if (!token) return <LoginForm onSubmit={loginHandler} />

    return  ReactDOM.render(
        <React.StrictMode>
          <App 
                   onLogout={logoutHandler}
                  username={username}
          />
        </React.StrictMode>,
        document.getElementById('root')
      );
      
      
      // reportWebVitals();
      
//     <App

//         onLogout={logoutHandler}
//         username={username}
//     />
}
