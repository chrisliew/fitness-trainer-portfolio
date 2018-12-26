import React from 'react';
import { Button } from 'reactstrap';

const CallToActionButtons = props => {
  return (
    <div className='cta-buttons'>
      <Button color='danger' sz='lg'>
        Request An Appointment
      </Button>
      <Button color='danger' sz='lg'>
        Free Website Analysis
      </Button>
    </div>
  );
};

export default CallToActionButtons;
