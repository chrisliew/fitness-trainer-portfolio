import React from 'react';
import { Link } from 'react-router-dom';
import WebsiteAnalysisForm from './WebsiteAnalysisForm';

const CallToActionButtons = props => {
  return (
    <div className='cta-buttons'>
      <Link to='contact-us'>
        <button>Request An Appointment</button>
      </Link>
      <WebsiteAnalysisForm buttonLabel='Free Website Analysis' />
    </div>
  );
};

export default CallToActionButtons;
