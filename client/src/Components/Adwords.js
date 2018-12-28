import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import { Link } from 'react-router-dom';

class Adwords extends Component {
  render() {
    return (
      <div className='adwords'>
        <TopBanner introTitle='PPC (AdWords) for Fitness Trainers' />
        <AppNavbar />
        <h2>Our Work for Fitness Trainers</h2>
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

export default Adwords;
