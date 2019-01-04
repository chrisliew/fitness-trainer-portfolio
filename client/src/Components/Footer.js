import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <footer className='footer-distributed'>
          <div className='footer-left'>
            <h3>
              <Link to='/'>
                <span>
                  Fitness Trainer Gains <i className='fas fa-dumbbell' />
                </span>
              </Link>
            </h3>
            <p className='footer-links'>
              <Link to='/marketing-solutions'>Marketing Solutions</Link>·
              <Link to='/our-work'>Our Work</Link>·
              <Link to='/growth-tips'>Growth Tips</Link>·
              <Link to='/pricing'>Pricing</Link>·
              <Link to='/about'>About Us</Link>·
              <Link to='/contact-us'>Contact</Link>
            </p>
            <p className='footer-company-name'>
              Fitness Trainer Gains &copy; 2019
            </p>
          </div>
          <div className='footer-center'>
            <div>
              <i className='fa fa-map-marker' />
              <p>
                <span>15 My Khe Street</span> Da Nang, Vietnam
              </p>
            </div>
            <div>
              <i className='fa fa-phone' />
              <p>+1 555 123456</p>
            </div>
            <div>
              <i className='fa fa-envelope' />
              <p>
                <a href='mailto:support@company.com'>support@company.com</a>
              </p>
            </div>
          </div>
          <div className='footer-right'>
            <p className='footer-company-about'>
              <span>About the company</span>
              Fitness Trainer Gains is dedicated to helping trainers gain more
              clients and to live a healthier and better life.
            </p>
            <div className='footer-icons'>
              <a href='/'>
                <i className='fa fa-facebook' />
              </a>
              <a href='/'>
                <i className='fa fa-twitter' />
              </a>
              <a href='/'>
                <i className='fa fa-linkedin' />
              </a>
              <a href='/'>
                <i className='fa fa-github' />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
