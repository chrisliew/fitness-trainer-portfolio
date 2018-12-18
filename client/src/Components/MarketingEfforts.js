import React, { Component } from 'react';
import { Button } from 'reactstrap';

class MarketingEfforts extends Component {
  render() {
    return (
      <div>
        <div className='marketing-efforts-cards'>
          <div>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>Websites That Work</h6>
            <p>
              We don't just create websites. <br />
              We create websites that <i>work</i>
            </p>
            <Button color='danger' size='sm'>
              Learn More About Web Design >
            </Button>
          </div>
          <div>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>AdWords (PPC)</h6>
            <p>
              We've managed over $1,300,000 <br />
              in campaigns for the best results
            </p>
            <Button color='danger' size='sm'>
              Learn More About Adwords>
            </Button>
          </div>
          <div>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>SEO</h6>
            <p>
              Effective on and off Page SEO <br />
              for top positions on Google
            </p>
            <Button color='danger' size='sm'>
              Learn More About SEO >
            </Button>
          </div>
        </div>
        <br />
        <br />

        <div className='marketing-efforts-cards'>
          <div>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>Content Writing</h6>
            <p>
              Our writers are highly-skilled <br />
              communicators and persuaders
            </p>
            <Button color='danger' size='sm'>
              Learn More About Content Writing >
            </Button>
          </div>
          <div>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>Online Advertisements</h6>
            <p>
              Target the right person with the <br />
              right message at the right time
            </p>
            <Button color='danger' size='sm'>
              Learn More About Online Advertising >
            </Button>
          </div>
          <div>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>Social Media</h6>
            <p>
              Social media growth to improve <br />
              credibility and gain new clients
            </p>
            <Button color='danger' size='sm'>
              Learn More About Social Media >
            </Button>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default MarketingEfforts;
