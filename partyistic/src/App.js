// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Inspiration from './components/Inspiration';
// import Parties from './components/Parties';
// import Profile from './components/Profile';
// import Services from './components/Services';
// import About from './components/About';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// export default function App() {
//   return (
//     <div style={{ height: '100%' }}>
//       <Router>
//         <Header />
//         <Switch>
//           <Route path="/" exact>
//             <Home />
//           </Route>
//           <Route path="/Inspiration" exact>
//             <Inspiration />
//           </Route>
//           <Route path="/Services" exact>
//             <Services />

//           </Route>

//           <Route path="/Parties" exact>
//             <Parties />
//           </Route>
//           <Route path="/Profile" exact>
//             <Profile />
//           </Route>
//           <Route path="/About" exact>
//             <About />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }






import React, { Component , useEffect, useState  } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import Parties from './components/Parties';
import Profile from './components/Profile';
import Services from './components/Services';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Regester';
import Login from './components/login';
import Logout from './components/logout';

import Posts from './components/posts';
import PostLoadingComponent from './components/postLoading';
import axiosInstance from './axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {
  const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
  return (
    <div style={{ height: '100%' }}>
      <Router>
        <Header />
       
        <Switch>
				{/* <Route exact path="/" component={App} /> */}
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
	
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Inspiration" exact>
            <Inspiration />
          </Route>
          <Route path="/Services" exact>
            <Services />

          </Route>

          <Route path="/Parties" exact>
            <Parties />
          </Route>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
    </div>
    
  );
}