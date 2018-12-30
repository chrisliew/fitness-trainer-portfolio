import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import NoWebsiteCTA from './NoWebsiteCTA';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

class Adwords extends Component {
  render() {
    return (
      <div>
        <TopBanner introTitle='PPC (AdWords) for Fitness Trainers' />
        <AppNavbar />
        <div className='adwords-marketing'>
          <Jumbotron className='title'>
            <h1>Effective PPC (AdWords) for Fitness Trainers</h1>
          </Jumbotron>
          <div className='intro'>
            <p>
              We help Dentists get more patients through effective PPC marketing
              and conversion centered landing-page design.
            </p>
          </div>
          <div className='description-container'>
            <div className='image'>
              <img src='/pictures/ppc-laptop.png' alt='ppc-laptop' />
            </div>
            <div className='description'>
              <p>
                <b>The Right Keywords + Right Ads = The Right Clients</b>
                <br />
                <br />
                We don’t just get you clicks, we optimize the whole campaign
                around conversions that turn into clients.
              </p>
            </div>
          </div>
          <div className='description-container'>
            <div className='image'>
              <img
                src='/pictures/ppc-laptop-ab-testing.png'
                alt='ppc-laptop-ab-testing'
              />
            </div>
            <div className='description'>
              <p>
                <b>Landing Page Testing</b>
                <br />
                <br />
                We analyze results and make relevant design changes using AB
                tests and then optimize the pages to get even more patients
              </p>
            </div>
          </div>
          <div className='description-container'>
            <div className='image'>
              <img src='/pictures/ppc-management.png' alt='ppc-management' />
            </div>
            <div className='description'>
              <p>
                <b>Expert PPC Management</b>
                <br />
                <br />
                With experience managing over $1,300,000 in PPC campaigns, we
                know advanced tactics to spend less and get better results.
              </p>
            </div>
          </div>
        </div>
        <div className='adwords-marketing-container'>
          <br />
          <br />
          <Container>
            <Row>
              <Col className='description' xs='6'>
                <div>
                  <img
                    src='/pictures/targeted-traffic.png'
                    alt='targeted-traffic'
                  />
                </div>
                <div className='text'>
                  <div>
                    <b>The Right Visitors</b>
                  </div>
                  <div>
                    We work on only bringing you interested visitors to convert
                    into paying clients.
                  </div>
                </div>
              </Col>
              <Col className='description-2' xs='6'>
                <div>
                  <img src='/pictures/retargeting.png' alt='retargeting' />
                </div>
                <div className='text'>
                  <div>
                    <b>Retargeting Ads</b>
                  </div>
                  <div>
                    Strategically bring back website visitors who didn't convert
                    and acquire new clients at lower costs.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='description' xs='6'>
                <div>
                  <img src='/pictures/fixed-price.png' alt='fixed-price' />
                </div>
                <div className='text'>
                  <div>
                    <b>Flat Pricing</b>
                  </div>
                  <div>
                    Our pricing is affordable and manageable for your marketing
                    budget.
                  </div>
                </div>
              </Col>
              <Col className='description-2' xs='6'>
                <div>
                  <img
                    src='/pictures/conversion-copy-writing.png'
                    alt='conversion-copy-writing'
                  />
                </div>
                <div className='text'>
                  <div>
                    <b>Conversion Copywriting</b>
                  </div>
                  <div>
                    Our team is highly experienced in copywriting focused on
                    conversions.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='description' xs='6'>
                <div>
                  <img
                    src='/pictures/custom-reporting.png'
                    alt='custom-reporting'
                  />
                </div>
                <div className='text'>
                  <div>
                    <b>Custom Reporting</b>
                  </div>
                  <div>
                    Easily view a summary of marketing stats that actually make
                    sense.
                  </div>
                </div>
              </Col>
              <Col className='description-2' xs='6'>
                <div>
                  <img
                    src='/pictures/conversion-reporting.png'
                    alt='conversion-reporting'
                  />
                </div>
                <div className='text'>
                  <div>
                    <b>Conversion Tools</b>
                  </div>
                  <div>
                    Analytics, landing pages, surveys and more. We use advanced
                    tools to grow your practice.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <NoWebsiteCTA />
        </div>
      </div>
    );
  }
}

export default Adwords;
