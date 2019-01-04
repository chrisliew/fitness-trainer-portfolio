import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import MoreClientsStatementNB from './MoreClientsStatementNB';

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
            <b>Fitness Trainer Gains</b> is a digital marketing agency dedicated
            to growing Fitness Trainer Businesses. We are focused on results and
            we are as passionate as you are about growing your business.
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
            <Link to='/contact-us'> contacting us.</Link>
          </p>
          <br />
        </div>
        <MoreClientsStatementNB />
      </div>
    );
  }
}

export default About;
