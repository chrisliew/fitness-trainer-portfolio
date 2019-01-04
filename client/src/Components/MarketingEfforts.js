import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MarketingEfforts extends Component {
  render() {
    return (
      <div>
        <div className='marketing-efforts-cards'>
          <div className='me-card'>
            <img src='/pictures/web-design.png' alt='Web Design Icon' />
            <h6>Websites That Work</h6>
            <p>
              We don't just create websites. <br />
              We create websites that <i>work</i>
            </p>
            <Link to='/web-design'>
              <button>Learn More About Web Design ></button>
            </Link>
          </div>
          <div className='me-card'>
            <img src='/pictures/ppc.png' alt='PPC Icon' />
            <h6>AdWords (PPC)</h6>
            <p>
              We've managed over $1,300,000 <br />
              in campaigns for the best results
            </p>
            <Link to='/adwords'>
              <button>Learn More About Adwords ></button>
            </Link>
          </div>
          <div className='me-card'>
            <img src='/pictures/seo.png' alt='Seo Icon' />
            <h6>SEO</h6>
            <p>
              Effective on and off Page SEO <br />
              for top positions on Google
            </p>
            <Link to='/seo'>
              <button>Learn More About SEO ></button>
            </Link>
          </div>
          <br />
          <br />

          <div className='me-card'>
            <img src='/pictures/content.png' alt='Content Icon' />
            <h6>Content Writing</h6>
            <p>
              Our writers are highly-skilled <br />
              communicators and persuaders
            </p>
            <Link to='/content-writing'>
              <button>Learn More About Content Writing ></button>
            </Link>
          </div>
          <div className='me-card'>
            <img src='/pictures/target.png' alt='target' />
            <h6>Online Advertisements</h6>
            <p>
              Target the right person with the <br />
              right message at the right time
            </p>
            <Link to='/online-advertising'>
              <button>Learn More About Online Ads ></button>
            </Link>
          </div>
          <div className='me-card'>
            <img src='/pictures/social.png' alt='social' />
            <h6>Social Media</h6>
            <p>
              Social media growth to improve <br />
              credibility and gain new clients
            </p>
            <Link to='social-media'>
              <button>Learn More About Social Media ></button>
            </Link>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default MarketingEfforts;
