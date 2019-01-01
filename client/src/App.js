import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import GrowthTips from './Components/GrowthTips';
import GrowthTipsArticles from './Components/GrowthTipsArticles';
import ContactUs from './Components/ContactUs';
import CallToActionButtons from './Components/CallToActionButtons';
import ContentWriting from './Components/ContentWriting';
import MarketingSolutions from './Components/MarketingSolutions';
import OnlineAdvertising from './Components/OnlineAdvertising';
import OurWork from './Components/OurWork';
import Adwords from './Components/Adwords';
import Pricing from './Components/Pricing';
import Privacy from './Components/Privacy';
import ScrollToTop from './Components/ScrollToTop';
import SEO from './Components/SEO';
import SocialMedia from './Components/SocialMedia';
import TermsAndConditions from './Components/TermsAndConditions';
import Footer from './Components/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/growth-tips' component={GrowthTips} />
              <Route path='/growth-tips/:id' component={GrowthTipsArticles} />
              <Route exact path='/contact-us' component={ContactUs} />
              <Route exact path='/content-writing' component={ContentWriting} />
              <Route exact path='/adwords' component={Adwords} />
              <Route
                exact
                path='/marketing-solutions'
                component={MarketingSolutions}
              />
              <Route
                exact
                path='/online-advertising'
                component={OnlineAdvertising}
              />
              <Route exact path='/our-work' component={OurWork} />
              <Route exact path='/pricing' component={Pricing} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/seo' component={SEO} />
              <Route exact path='/social-media' component={SocialMedia} />
              <Route
                exact
                path='/terms-and-conditions'
                component={TermsAndConditions}
              />
            </Switch>
            <CallToActionButtons />
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
