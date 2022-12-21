import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import Intro1 from './components/Intro1.js';
import Footer from './components/Footer.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';
import Heading from './components/Heading.js';
import logo from './logo.svg';

import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <Nav />
    <Heading />
    <Promo />
    <Intro1 />
    <Intro2 />
    <Intro3 />
    <Footer />

    </div>
  
    );
 }

export default App;