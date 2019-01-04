import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import NoWebsiteCTA from './NoWebsiteCTA';
import { Jumbotron } from 'reactstrap';

const Visitor = () => {
  return (
    <div className='visitor'>
      <h5>
        <b>
          <u>A Website Visitor Would Like To:</u>
        </b>
      </h5>
      <div className='description'>
        <i className='fas fa-check' />
        <span> Make a Booking</span>
        <br />
        <i className='fas fa-check' />
        <span> See Social Proof</span>
        <br />
        <i className='fas fa-check' />
        <span> Not Be Confused</span>
        <br />
        <i className='fas fa-check' />
        <span> Have The Right Answers</span>
        <br />
        <i className='fas fa-check' />
        <span> Know How You Can Help</span>
        <br />
        <i className='fas fa-check' />
        <span> Know How You Are Unique</span>
        <br />
        <i className='fas fa-check' />
        <span> See Contact & Location Details</span>
      </div>
    </div>
  );
};

const Dentist = () => {
  return (
    <div className='dentist'>
      <h5>
        <b>
          <u>A Fitness Trainer Would Like To:</u>
        </b>
      </h5>
      <div className='description'>
        <i className='fas fa-check' />
        <span role='img' aria-label='emoji'>
          {' '}
          Go On Holiday 😉
        </span>
        <br />
        <i className='fas fa-check' />
        <span> Be Fully Booked</span>
        <br />
        <i className='fas fa-check' />
        <span> Get More Patients</span>
        <br />
        <i className='fas fa-check' />
        <span> Have a Waiting List</span>
        <br />
        <i className='fas fa-check' />
        <span> Not Focus on Marketing</span>
        <br />
        <i className='fas fa-check' />
        <span> Spend More Time Learning</span>
        <br />
        <i className='fas fa-check' />
        <span> Improve Patient Relationships</span>
      </div>
    </div>
  );
};

const SuccessList = () => {
  return (
    <div className='success-list'>
      <div className='success'>
        <i className='fas fa-lock' />
        <br />
        Secure SSL security
      </div>
      <div className='success'>
        <i class='fas fa-list-ol' />
        <br />A full list of services
      </div>
      <div className='success'>
        <i class='fas fa-bolt' />
        <br />
        Clear Call-To-Actions
      </div>
      <div className='success'>
        <i class='fas fa-fast-forward' />
        <br />A fast loading website
      </div>
      <div className='success'>
        <i class='fas fa-search' />
        <br />
        Effective on-page and off-page SEO
      </div>
      <div className='success'>
        <i class='fab fa-blogger-b' />
        <br />A regular blog showcasing expertise
      </div>
      <div className='success'>
        <i class='fas fa-comment' />
        <br />A clear message for the website visitor
      </div>
      <div className='success'>
        <i class='fas fa-smile-beam' />
        <br />
        Multiple case studies and testimonials
      </div>
      <div className='success'>
        <i class='fas fa-pencil-alt' />
        <br />A professional, well-designed appearance
      </div>
      <div className='success'>
        <i class='fas fa-fire-alt' />
        <br />
        An effective online marketing campaign
      </div>
      <div className='success'>
        <i class='far fa-thumbs-up' />
        <br />
        Social media engagement and growth
      </div>
      <div className='success'>
        <i class='fas fa-chart-line' />
        <br />
        Analyzing the data for improvement
      </div>
    </div>
  );
};

class WebDesign extends Component {
  render() {
    return (
      <div>
        <TopBanner introTitle='Web Design for Fitness Trainers' />
        <AppNavbar />
        <div className='web-design'>
          <Jumbotron className='title'>
            <h1>Web Design and Websites for Fitness Trainers</h1>
          </Jumbotron>
          <div className='intro'>
            <p>
              Ever wanted a website that not only looks great, but also gets
              results?
            </p>
            <p>
              How about a website created ONLY for Fitness Trainers by a team
              who understands exactly what you're looking for?
            </p>
          </div>
          <div className='requirements'>
            <Dentist />
            <Visitor />
          </div>
          <div>
            <h5>This Is Where We Help You:</h5>
            <br />
            <img
              src='/pictures/dentist-web-design.jpg'
              alt='dentist-web-design'
            />
            <br />
            <br />
            <p>
              We create effective websites that are perfect for your practice
              and the website visitor.
            </p>
            <br />
            <p>
              In order for Fitness Trainer websites to succeed in this
              competitive industry, they need to have the following:
            </p>
            <SuccessList />
          </div>
        </div>
        <NoWebsiteCTA />
      </div>
    );
  }
}

export default WebDesign;
