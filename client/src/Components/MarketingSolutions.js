import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import MarketingEfforts from './MarketingEfforts';
import MarketingAnalysis from './MarketingAnalysis';

class MarketingSolutions extends Component {
  render() {
    return (
      <div className='marketing-solutions'>
        <TopBanner introTitle='Marketing for Fitness Trainers' />
        <AppNavbar />
        <h2 className='header'>
          Online Marketing Solutions for Fitness Trainers
        </h2>
        <div className='text'>
          <p>
            Finding the right marketing company is not easy... there are so many
            choices out there.
            <br />
            <br />
            This is why we ONLY work with Fitness Trainers. We get more patients
            through effective online marketing and development.
            <br />
            <br />
            <br />
            We provide the following services:
          </p>
        </div>
        <MarketingEfforts />
        <div className='scenarios'>
          <div className='text'>
            <p>
              <b>Scenario #1: You Already Have A Website</b>
              <br />
              <br />
              If you already have a website, was is just created by an
              individual/company who creates websites that they thought may look
              good or does it actually work?
              <br />
              <br />
              Does it send the right message across to a potential patients
              about what they are looking for? Does it fulfill your business
              objective of getting more patients?
            </p>
            <br />
            <br />
            <p>
              <b>Scenario #2: You Don't Have A Website Yet</b>
              <br />
              <br />
              If you don't currently have a website, it's extremely important to
              have one in this competitive market. All credible Fitness Trainers
              and websites have effective websites that showcase their expertise
              and experience and it results in more patients and higher profits.
            </p>
          </div>
        </div>
        <MarketingAnalysis />
        <Jumbotron className='statement'>
          <h2>
            <b>
              <div>We focus on getting you more clients,</div>
              <div>while you focus on running your business</div>
            </b>
          </h2>
        </Jumbotron>
      </div>
    );
  }
}

export default MarketingSolutions;
