import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class GrowthTips extends Component {
  render() {
    return (
      <div className='growth-tips'>
        <TopBanner introTitle='Growth Tips for Fitness Trainers' />
        <AppNavbar />
        <div className='growth-tips-container'>
          <Jumbotron className='title'>
            <h1>Growth Tips for Fitness Trainers</h1>
          </Jumbotron>
          <div className='information-container'>
            <div className='article'>
              <Link to='/growth-tips/7-lead-generation-tips'>
                <img
                  src='/pictures/gym-office.jpg'
                  alt='lead generation office worker'
                />
              </Link>
              <Link to='/growth-tips/7-lead-generation-tips'>
                <h2 className='header'>
                  7 Lead Generation Tips for Fitness Trainer Websites
                </h2>
              </Link>
              <p>
                How do you attract these new patients – especially in today's
                world where website visitors have short attention spans and
                access to more competition? Here are 7 actionable steps you can
                take to transform your fitness trainer website into a lead
                generating magnet...
              </p>
              <Link to='/growth-tips/7-lead-generation-tips'>
                <Button className='float-left' outline color='danger'>
                  Read Article >
                </Button>
              </Link>
            </div>
            <div className='links'>
              <h3>Growth Tips</h3>
              <Link to='/growth-tips/7-lead-generation-tips'>
                7 Lead Generation Tips for Fitness Trainer Websites
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GrowthTips;
