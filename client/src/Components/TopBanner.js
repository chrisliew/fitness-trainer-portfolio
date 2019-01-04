import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WebsiteAnalysisForm from './WebsiteAnalysisForm';

class TopBanner extends Component {
  render() {
    return (
      <div className='top-banner'>
        <div className='buttons'>
          <Link to='/contact-us'>
            <button color='danger' size='sm'>
              Request Appointment
            </button>
          </Link>
          <WebsiteAnalysisForm buttonLabel='Free Website Analysis' />
        </div>
        <div className='title'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h4>
              <b>Fitness Trainer Gains</b>
            </h4>
          </Link>
          <h6>{this.props.introTitle}</h6>
        </div>
      </div>
    );
  }
}

export default TopBanner;
