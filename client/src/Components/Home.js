import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import MarketingEfforts from './MarketingEfforts';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';

const ArticleLink = props => {
  return (
    <div className='article-link'>
      <div className='description'>
        <i>Fitness Trainer Gains</i> is a dedicated team of expert marketers
        focused on helping Fitness Trainers get more clients via{' '}
        <a href='/'>online marketing </a>
        and consulting.
      </div>
      <img src='/pictures/actionable-steps.jpg' alt='lead-generation' />
      <br />
      <a href='/'>
        <h4>7 Lead Generation Tips for Fitness Trainer Websites</h4>
      </a>
      <p className='article-description'>
        How do you attract these new clients – especially in today's world where
        website visitors have short attention spans and access to more
        competition?
      </p>
      <p className='call-to-action'>
        Here are 7 actionable steps to grow your Fitness Trainer Business...
      </p>
      <Button outline color='danger'>
        Read Article >
      </Button>
      <br />
    </div>
  );
};

const MarketingAnalysis = props => {
  return (
    <div className='marketing-analysis'>
      <h2>Get A Free Marketing Analysis Of Your Website</h2>
      <div>
        Our team will go through your website and give you actionable advice to
        get more clients
      </div>
      <br />
      <Button color='danger' sz='lg'>
        Free Website Analysis
      </Button>
      <br />
      <br />
    </div>
  );
};

const HeroImage = props => {
  return (
    <div className='hero-image-container'>
      <Jumbotron id='hero-image' fluid>
        <Container className='container' fluid>
          <h1>Helping Fitness Trainers Land More Clients</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

const Home = props => {
  return (
    <div>
      <TopBanner introTitle='Lead Generation for Fitness Trainers' />
      <AppNavbar />
      <HeroImage />
      <div className='marketing-efforts'>
        <div>We are experts at helping Fitness Trainers get more clients</div>
        <div>through the following marketing efforts:</div>
      </div>
      <MarketingEfforts />
      <h3>
        We focus on getting you more clients, while you focus on running your
        business
      </h3>
      <br />
      <br />
      <br />
      <MarketingAnalysis />
      <ArticleLink />
    </div>
  );
};

export default Home;
