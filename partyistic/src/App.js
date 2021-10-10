/** @format */

import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inspiration from './pages/Inspiration';
import Parties from './pages/Parties';
import Profile from './pages/Profile';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import axiosInstance from './axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ReservePlace from './pages/services-sub-pages/ReservePlace';
import HirePlanner from './pages/services-sub-pages/HirePlanner';
import ChooseBand from './pages/services-sub-pages/ChooseBand';
import BookPhotoSession from './pages/services-sub-pages/BookPhotoSession';
import GetFashion from './pages/services-sub-pages/GetFashion';
import RentACar from './pages/services-sub-pages/RentACar';
import BookATrip from './pages/services-sub-pages/BookATrip';

import WeddingParty from './pages/inspiration-sub-pages/InspirationWedding';
import BirthdayParty from './pages/inspiration-sub-pages/InspirationBirthday';
import SpecialParty from './pages/inspiration-sub-pages/InspirationSpecial';
import GradParty from './pages/inspiration-sub-pages/InspirationGraduation';
import { useHistory } from 'react-router-dom';

export default function App() {
  const history = useHistory();

  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  }, []);

  return (
    <div style={{ height: '100%', backgroundColor: '#221E1D' }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/Login' component={Login} />
          <Route path='/Logout' component={Logout} />
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/Inspiration' exact>
            <Inspiration />
          </Route>
          <Route path='/Services' exact>
            <Services />
          </Route>
          <Route path='/Services/planners' exact>
            <HirePlanner />
          </Route>
          <Route path='/Services/musicbands' exact>
            <ChooseBand />
          </Route>
          <Route path='/Services/photosessions' exact>
            <BookPhotoSession />
          </Route>
          <Route path='/Services/fashion' exact>
            <GetFashion />
          </Route>

          <Route path='/Services/cars' exact>
            <RentACar />
          </Route>

          <Route path='/Services/trips' exact>
            <BookATrip />
          </Route>
          <Route path='/Parties' exact>
            <Parties />
          </Route>
          <Route path='/Profile' exact>
            <Profile />
          </Route>
          <Route path='/AboutUs' exact>
            <AboutUs />
          </Route>
          <Route path='/inspiration/weddingparties' exact>
            <WeddingParty />
          </Route>
          <Route path='/inspiration/birthdayparties' exact>
            <BirthdayParty />
          </Route>
          <Route path='/inspiration/specialparties' exact>
            <SpecialParty />
          </Route>
          <Route path='/inspiration/gradparties' exact>
            <GradParty />
          </Route>
          <Route path='/Services/places' exact>
            <ReservePlace />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
