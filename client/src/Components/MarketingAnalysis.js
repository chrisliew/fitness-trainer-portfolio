import React from 'react';
import WebsiteAnalysisForm from './WebsiteAnalysisForm';

const MarketingAnalysis = props => {
  return (
    <div className='marketing-analysis'>
      <div className='text'>
        <p>
          <h2 className='title'>
            Get A Free Marketing Analysis Of Your Website
          </h2>
        </p>
        <p>
          Our team will go through your website and give you actionable advice
          to get more clients
        </p>
      </div>
      <br />
      <p className='feedback'>
        <WebsiteAnalysisForm buttonLabel='Get Free Feedback' />
        <br />
        <br />
      </p>
    </div>
  );
};

export default MarketingAnalysis;
