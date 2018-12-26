import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';

class About extends Component {
  render() {
    return (
      <div className='about-us'>
        <TopBanner introTitle='Marketing for Fitness Trainers' />
        <AppNavbar />
        <div className='about-us-container'>
          <h2>About Us</h2>
          <br />
          <p>
            Fitness Trainer Gains is a digital marketing agency dedicated to
            growing Fitness Trainer Businesses. We are focused on results and we
            are as passionate as you are about growing your business.
          </p>
          <p>
            Our team has over 20 years worth of combined experience helping
            trainers grow online.
          </p>
          <p>
            We now only work with Fitness Trainers by improving their online
            presence and to get new customers.
          </p>
          <br />
          <p>
            If you have any further questions, please don't hesitate in
            contacting us.
          </p>
          <br />
          <h3>
            We focus on getting you more clients, while you focus on running
            your business.
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
