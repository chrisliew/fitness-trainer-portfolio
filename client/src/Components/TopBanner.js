import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import WebsiteAnalysisForm from './WebsiteAnalysisForm';

class TopBanner extends Component {
  render() {
    return (
      <div className='top-banner'>
        <div className='buttons'>
          <Button color='danger' sz='lg'>
            Request An Appointment
          </Button>
          <WebsiteAnalysisForm buttonLabel='Free Website Analysis' />
        </div>
        <div className='title'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h4>Fitness Trainer Gains</h4>
          </Link>
          <h6>{this.props.introTitle}</h6>
        </div>
      </div>
    );
  }
}

export default TopBanner;
