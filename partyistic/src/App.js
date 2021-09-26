import React, { Component } from 'react';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReservePlace from './service_pages/ReservePlace';
import HirePlanner from './service_pages/HirePlanner';
import ChooseBand from './service_pages/ChooseBand';
import BookPhotoSession from './service_pages/BookPhotoSession';
import GetFashion from './service_pages/GetFashion';
import RentACar from './service_pages/RentACar';
import BookATrip from './service_pages/BookATrip';

export default function App() {
  return (
    <div style={{ height: '100%' }}>
      <Router>
        <Header />
        <Switch>
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
          <Route path="/Services/places" exact>
            <ReservePlace />
          </Route>

          <Route path="/Services/planner" exact>
            <HirePlanner />
          </Route>

          <Route path="/Services/musicBand" exact>
            <ChooseBand />
          </Route>

          <Route path="/Services/photoSession" exact>
            <BookPhotoSession />
          </Route>

          <Route path="/Services/fashion" exact>
            <GetFashion />
          </Route>

          <Route path="/Services/cars" exact>
            <RentACar />
          </Route>

          <Route path="/Services/trip" exact>
          <BookATrip />
        </Route>
          

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}