import React, { Component } from 'react';
import AppNavbar from './Components/AppNavbar';
import Home from './Components/Home';
import TopBanner from './Components/TopBanner';
import Footer from './Components/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopBanner />
        <AppNavbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
