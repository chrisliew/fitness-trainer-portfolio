import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';

//map over articles, if matches the params.id then render it.

const SevenLeadGenerationTips = () => {
  return (
    <div className='seven-lead-generation-tips'>
      <br />
      <div>
        <img
          className='main-image'
          src='/pictures/dentist-lead-generation.jpg'
          alt='dentist-lead-generation'
        />
      </div>
      <div>
        <h2>7 Lead Generation Tips for Fitness Trainer Websites</h2>
      </div>
      <div>
        <p className='last-updated'>
          <i className='far fa-clock' />
          <span className='glyphicon glyphicon-time' />
          <span>Last updated Jan. 16, 2019</span>
        </p>
        <p className='intro'>
          Growing your fitness trainer business is tough. There is lots of
          competition and clients are more demanding of great service than ever
          before. That's why it's so important to have a professional webpage
          that not only looks great, but actually gets you more customers.
        </p>
      </div>
      <div>
        <img src='/pictures/first-impression.jpg' alt='first-impression' />
      </div>
      <div>
        <h2>1. First Impressions</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
      <div>
        <img src='/pictures/right-content.jpg' alt='right-content' />
      </div>
      <div>
        <h2>2. Content</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
      <div>
        <img src='/pictures/online-presence.jpg' alt='online-presence' />
      </div>
      <div>
        <h2>3. Getting Discovered Online</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
      <div>
        <img
          src='/pictures/landing-page-optimization.jpg'
          alt='landing-page-optimization'
        />
      </div>
      <div>
        <h2>4. Effective Landing Pages</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
      <div>
        <img src='/pictures/call-to-action.jpg' alt='call-to-action' />
      </div>
      <div>
        <h2>Highlighting Your CTA</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
      <div>
        <img src='/pictures/analyze-data.jpg' alt='analyze-data' />
      </div>
      <div>
        <h2>6. Analyzing and Testing Your Data</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
      <div>
        <img src='/pictures/online-marketing.jpg' alt='online-marketing' />
      </div>
      <div>
        <h2>7. Marketing</h2>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt scelerisque turpis, id iaculis quam tincidunt at. Nulla
          facilisi. Nullam a ante tellus. Duis bibendum molestie ante vel
          gravida. Suspendisse consectetur sem vitae egestas blandit. Morbi eget
          nunc nec nisi tempus viverra a et arcu.
        </p>
      </div>
    </div>
  );
};

class GrowthTipsArticles extends Component {
  render() {
    return (
      <div>
        <TopBanner introTitle='Lead Generation for Fitness Trainers' />
        <AppNavbar />
        <SevenLeadGenerationTips />
      </div>
    );
  }
}

export default GrowthTipsArticles;
