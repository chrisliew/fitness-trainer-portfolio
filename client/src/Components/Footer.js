import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer-distributed'>
          <div className='footer-left'>
            <h3>
              Fitness Trainer Gains
              <span>
                <i className='fas fa-dumbbell' />
              </span>
            </h3>
            <p className='footer-links'>
              <a href='/'>Home</a>·<a href='/'>Pricing</a>·<a href='/'>Faq</a>·
              <a href='/'>Contact</a>
            </p>
            <p className='footer-company-name'>
              Fitness Trainer Gains &copy; 2019
            </p>
          </div>
          <div className='footer-center'>
            {/* <div>
              <i className='fa fa-map-marker' />
              <p>
                <span>15 My Khe Street</span> Da Nang, Vietnam
              </p>
            </div> */}
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
