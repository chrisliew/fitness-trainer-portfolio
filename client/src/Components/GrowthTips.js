import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import { Jumbotron, Button } from 'reactstrap';

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
              <a href='/'>
                <img
                  src='/pictures/gym-office.jpg'
                  alt='lead generation office worker'
                />
              </a>
              <a href='/'>
                <h2 className='header'>
                  7 Lead Generation Tips for Fitness Trainer Websites
                </h2>
              </a>
              <p>
                How do you attract these new patients – especially in today's
                world where website visitors have short attention spans and
                access to more competition? Here are 7 actionable steps you can
                take to transform your fitness trainer website into a lead
                generating magnet...
              </p>
              <a href='/'>
                <Button className='float-left' outline color='danger'>
                  Read Article >
                </Button>
              </a>
            </div>
            <div className='links'>
              <h3>Growth Tips</h3>
              <a href='/'>
                7 Lead Generation Tips for Fitness Trainer Websites
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GrowthTips;
