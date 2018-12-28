import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import { Jumbotron } from 'reactstrap';
import NoWebsiteCTA from './NoWebsiteCTA';

class OnlineAdvertising extends Component {
  render() {
    return (
      <div className='online-advertising'>
        <TopBanner introTitle='Growth Tips for Fitness Trainers' />
        <AppNavbar />
        <div className='online-advertising-container'>
          <Jumbotron className='title'>
            <h1>Online Advertising for Fitness Trainers</h1>
          </Jumbotron>
          <div className='text'>
            <p>
              Online Advertising is a great way to acquire new patients for
              Dentists.
              <br />
              <br />
              The main advertisement platforms are:
              <br />
              <br />
            </p>
            <img
              className='online-advertising-graphic'
              src='/pictures/online-advertising-graphic.jpg'
              alt='online-advertising-graphic'
            />
            <p>
              Each advertising platform provides various targeting options to
              advertise to potential patients.
              <br />
              <br />
              <br />A simple illustration can be:
            </p>
            <img
              className='online-advertisements-explained'
              src='/pictures/online-advertisements-explained.jpg'
              alt='online-advertisements-explained'
            />
            <p>
              Fitness Trainer Gains has a highly qualified marketing team to
              create, optimize and manage your online advertisements so that
              your practice gets more patients.
            </p>
            <br />
            <br />
          </div>
          <NoWebsiteCTA />
        </div>
      </div>
    );
  }
}

export default OnlineAdvertising;
