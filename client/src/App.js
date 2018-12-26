import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import GrowthTips from './Components/GrowthTips';
import ContactUs from './Components/ContactUs';
import CallToActionButtons from './Components/CallToActionButtons';
import ContentWriting from './Components/ContentWriting';
import Footer from './Components/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/growth-tips' component={GrowthTips} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/content-writing' component={ContentWriting} />
          </Switch>
          <CallToActionButtons />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
