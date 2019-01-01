import React from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import { Jumbotron } from 'reactstrap';
import NoWebsiteCTA from './NoWebsiteCTA';

const SocialMedia = () => {
  return (
    <div>
      <TopBanner introTitle='Social Media For Fitness Trainers' />
      <AppNavbar />
      <div className='social-media'>
        <Jumbotron className='title'>
          <h1>Social Media for Fitness Trainers</h1>
        </Jumbotron>
        <p className='paragraph1'>
          Social Media portrays credibility and it's an effective tool to inform
          existing patients of relevant news as well as to acquire new patients.
          <br />
          <br />
          <br />
          The main social media platforms for Dentists are:
          <img
            src='pictures/social-media-for-dentists.jpg'
            alt='social-media-for-dentists'
          />
        </p>
        <p className='paragraph2'>
          The truth is that one of the first things potential patients do is to
          find out what other patients think of your Dentistry Practice.
          <br />
          <br />
          <br />
          The process can be illustrated as follows:
        </p>
        <img
          src='pictures/social-media-explained.jpg'
          alt='social-media-explained'
        />
        <p className='paragraph3'>
          We create, optimize and manage your Dentist Practice social media
          profiles to create more credibility so that your practice gets more
          patients.
        </p>
      </div>
      <NoWebsiteCTA />
    </div>
  );
};

export default SocialMedia;
