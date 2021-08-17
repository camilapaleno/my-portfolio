import React from 'react';
import Navbar from './components/Navbar';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Web from './components/pages/Web';
import Photo from './components/pages/Photo';
import BPS from './components/pages/web/BPS';
import BXB from './components/pages/web/BXB';
import NipponNiche from './components/pages/web/NipponNiche';
import Lingard from './components/pages/web/Lingard';
import Carolyn from './components/pages/web/Carolyn';
import DrBetty from './components/pages/web/DrBetty';
import Kickback from './components/pages/photo/Kickback';
import LAMusic from './components/pages/photo/LAMusic';
import Mariana from './components/pages/photo/Mariana';
import Tom from './components/pages/photo/Tom';
import Thailand from './components/pages/photo/Thailand';
import ComingSoon from './components/pages/WIP';
import About from './components/pages/About';
import Event from './components/pages/photo/Event';
import France from './components/pages/photo/France';
import US from './components/pages/photo/US';
import CR from './components/pages/photo/CR';

function App() {

  return (
    <>
    <Helmet>
      <title>Camila Paleno</title>

      <script src="./animations/animation.js"></script>
      <script src="./animations/lottie.js"></script>

      <meta property="og:image" content="/"/>
      <meta name="description" content="Clean and modern website design and development for your business." />
      <meta property="og:title" content="Web Design and Development"/>
      <meta property="og:url" content="https://www.imcamila.com" />
      <meta property="og:description" content="Clean and modern website design and development for your business." />
    </Helmet>

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
        <Route path="/about" exact component={About}/>
        <Route path="/events" exact component={Event}/>
        <Route path="/france" exact component={France}/>
        <Route path="/unitedstates" exact component={US}/>
        <Route path="/costarica" exact component={CR}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
