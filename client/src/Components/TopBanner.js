import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
          <h2>Fitness Trainer Gains</h2>
          <h6>Lead Generation for Fitness Trainers</h6>
        </div>
      </div>
    );
  }
}

export default TopBanner;
