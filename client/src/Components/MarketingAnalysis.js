import React from 'react';
import { Button } from 'reactstrap';

const MarketingAnalysis = props => {
  return (
    <div className='marketing-analysis'>
      <h2 className='title'>Get A Free Marketing Analysis Of Your Website</h2>
      <div>
        Our team will go through your website and give you actionable advice to
        get more clients
      </div>
      <br />
      <Button color='danger' sz='lg'>
        Give Me Feedback
      </Button>
      <br />
      <br />
    </div>
  );
};

export default MarketingAnalysis;
