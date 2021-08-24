import React from 'react';
import Navbar from './components/Navbar';
import {Helmet} from "react-helmet";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
import Mexico from './components/pages/photo/Mexico';
import Spain from './components/pages/photo/Spain';
import Iceland from './components/pages/photo/Iceland';
import Contact from './components/pages/Contact';
import Links from './components/pages/Links';
import Curse from './components/pages/Curse';

function App() {

  return (
    <>
    <Helmet>
      <title>Camila Paleno</title>

      <script src="./animations/animation.js"></script>
      <script src="./animations/lottie.js"></script>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"/>

      <meta property="og:image" content="/"/>
      <meta name="description" content="Clean and modern website design and development for your business." />
      <meta property="og:title" content="Web Design and Development"/>
      <meta property="og:url" content="https://www.imcamila.com" />
      <meta property="og:description" content="Clean and modern website design and development for your business." />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rozha+One&display=swap" rel="stylesheet" />

    </Helmet>

    <BrowserRouter basename='/my-portfolio'>
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
        <Route path="/mexico" exact component={Mexico}/>
        <Route path="/spain" exact component={Spain}/>
        <Route path="/iceland" exact component={Iceland}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/links" exact component={Links}/>
        <Route path="/curse" exact component={Curse}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
