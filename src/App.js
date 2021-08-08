import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Web from './components/pages/Web';
import Photo from './components/pages/Photo';
import BPS from './components/pages/BPS';
import BXB from './components/pages/BXB';
import NipponNiche from './components/pages/NipponNiche';
import Lingard from './components/pages/Lingard';
import Carolyn from './components/pages/Carolyn';
import DrBetty from './components/pages/DrBetty';
import Kickback from './components/pages/Kickback';
import LAMusic from './components/pages/LAMusic';
import Mariana from './components/pages/Mariana';
import Tom from './components/pages/Tom';
import Thailand from './components/pages/Thailand';
import ComingSoon from './components/pages/WIP';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/web" exact component={Web}/>
        <Route path="/photo" exact component={Photo}/>
        <Route path="/bps" exact component={BPS}/>
        <Route path="/bxb" exact component={BXB}/>
        <Route path="/nipponniche" exact component={NipponNiche}/>
        <Route path="/lingard" exact component={Lingard}/>
        <Route path="/carolyn" exact component={Carolyn}/>
        <Route path="/drbetty" exact component={DrBetty}/>
        <Route path="/kickback" exact component={Kickback}/>
        <Route path="/lamusicians" exact component={LAMusic}/>
        <Route path="/mariana" exact component={Mariana}/>
        <Route path="/tom" exact component={Tom}/>
        <Route path="/thailand" exact component={Thailand}/>
        <Route path="/comingsoon" exact component={ComingSoon}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
