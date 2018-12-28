import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import MarketingAnalysis from './MarketingAnalysis';
import { Link } from 'react-router-dom';

class OurWork extends Component {
  render() {
    return (
      <div className='our-work'>
        <TopBanner introTitle='Growth Tips for Fitness Trainers' />
        <AppNavbar />
        <h2>Our Work for Fitness Trainers</h2>
        <div className='our-work-container'>
          <p>
            Finding the right marketing agency is not easy... there are so many
            choices to choose from.
            <br />
            <br />
            This is why we ONLY work with Fitness Trainers. We get more patients
            through effective online marketing and development.
          </p>
        </div>
        <div className='website-example-container'>
          <div>
            <Link to='/'>
              <img src='pictures/gym-office.jpg' alt='website-example-1' />
            </Link>
          </div>
          <div className='description'>
            <p>
              <b>VancouverFitnessDude.com</b>
              <br />
              <br />
              <i>VancouverFitnessDude</i> wanted to update their website to get
              more patients and be more professional for a better user
              experience.
              <br />
              <br />
              <Link to='/'>View Website Here</Link>
            </p>
          </div>
        </div>
        <hr />
        ADD MORE WEBSITE
        <MarketingAnalysis />
        <div className='statement'>
          <div>
            <p>
              We focus on getting you more clients,
              <br />
              while you focus on running your business
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurWork;
