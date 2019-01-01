import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import PricingForm from './PricingForm';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MoreClientsStatement from './MoreClientsStatement';

const FAQ = () => {
  return (
    <div className='faq'>
      <h4>Frequently Asked Questions</h4>
      <div className='questions'>
        <div className='question'>
          <p>
            <b>How long is the contract?</b>
            <br />
            The <i>Standard</i> option is month-to-month and the <i>Premium</i>{' '}
            option is for 12 months as it includes a conversion-centered
            website.
          </p>
        </div>
        <div className='question'>
          <p>
            <b>What if I just want a website?</b>
            <br />
            Contact us and we can assist you with this. Remember, a website
            without targeted traffic is as good as a business without customers.
          </p>
        </div>
        <div className='question'>
          <p>
            <b>What if I have a higher budget?</b>
            <br />
            Contact us to discuss a custom plan that works for your business to
            see better results.
          </p>
        </div>
        <div className='question'>
          <p>
            <b>Do you have any cheaper options?</b>
            <br />
            Not at this moment. We are dedicated to growing your fitness trainer
            business and this is the smallest budget needed to see long-term
            growth.
          </p>
        </div>
        <p>
          Have any additional questions?{' '}
          <Link to='contact-us'>
            <i>Contact Us</i>
          </Link>
          <br />
          <br />
          <i>(All figures in USD)</i>
        </p>
      </div>
    </div>
  );
};

const FeaturesStandard = () => {
  return (
    <div>
      <i className='fas fa-check' />
      <span> Advanced SEO</span>
      <br />
      <i className='fas fa-check' />
      <span> Advanced AdWords Management & Reporting</span>
      <br />
      <i className='fas fa-check' />
      <span> Online Advertisement Management & Reporting</span>
      <br />
      <i className='fas fa-check' />
      <span> Ongoing Website Support (1 hour)</span>
      <br />
      <i className='fas fa-check' />
      <span> Daily (weekday) Social Media Posts/Engagement</span>
      <br />
      <i className='fas fa-check' />
      <span> AB Testing & Landing Page Improvements</span>
      <br />
      <i className='fas fa-check' />
      <span> Monthly ROI assessment</span>
      <br />
      <i className='fas fa-check' />
      <span> 1 Detailed Blog Article Every Week (1,200+ words)</span>
      <br />
    </div>
  );
};

const Premium = () => {
  return (
    <div className='premium'>
      <h5>
        <b>
          <u>Premium</u>
        </b>
      </h5>
      <p>
        <i>
          For Fitness Trainers who don't have a website and are interested in
          effective online marketing
        </i>
      </p>
      <br />
      2999 pm
      <br />
      <b>No once-off or hidden fees</b>
      <div className='description'>
        <i className='fas fa-check' />
        <span> Conversion-centered Website Design</span>
        <br />
        <FeaturesStandard />
      </div>
    </div>
  );
};

const Standard = () => {
  return (
    <div className='standard'>
      <h5>
        <b>
          <u>Standard</u>
        </b>
      </h5>
      <p>
        <i>
          For Fitness Trainers who already have a website and are only
          interested in effective online marketing
        </i>
      </p>
      <br />
      1999 pm
      <br />
      <b>No once-off or hidden fees</b>
      <div className='description'>
        <FeaturesStandard />
      </div>
    </div>
  );
};

class Pricing extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <AppNavbar />
        <div className='pricing'>
          <Jumbotron className='title'>
            <h1>Fitness Trainer Marketing Pricing Options</h1>
          </Jumbotron>
          <div className='features'>
            <Standard />
            <Premium />
          </div>
          <FAQ />
          <div className='pricing-form'>
            Select the option you are interested in below and we will get back
            to you:
            <PricingForm />
            <MoreClientsStatement />
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
