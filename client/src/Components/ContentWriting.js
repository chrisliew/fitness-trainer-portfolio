import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import NoWebsiteCTA from './NoWebsiteCTA';

class ContentWriting extends Component {
  render() {
    return (
      <div className='content-writing'>
        <TopBanner introTitle='Content Writing for Fitness Trainers' />
        <AppNavbar />
        <div className='content-writing-container'>
          <Jumbotron className='title'>
            <h2>
              <b>Content Writing for Fitness Trainers</b>
            </h2>
          </Jumbotron>
          <br />
          <p>
            Content Writing is an essential marketing strategy to grow your
            Fitness Training business online and to get more patients.
          </p>
          <br />
          <br />
          <h3>Why Is Content Writing Important?</h3>
          <br />
          <Container>
            <Row>
              <Col className='description' xs='6'>
                <div>
                  <img src='/pictures/authority.png' alt='authority' />
                </div>
                <div className='text'>
                  <div>
                    <b>Shows Authority</b>
                  </div>
                  <div>
                    Professionals share what they know. It's no different for
                    Fitness Trainers.
                  </div>
                </div>
              </Col>
              <Col className='description-2' xs='6'>
                <div>
                  <img src='/pictures/credibility.png' alt='credibility' />
                </div>
                <div className='text'>
                  <div>
                    <b>Shows Credibility</b>
                  </div>
                  <div>
                    Credibility positions you as the "go-to" Fitness Trainer
                    clients want to see.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='description' xs='6'>
                <div>
                  <img src='/pictures/seo-graph.png' alt='seo-graph' />
                </div>
                <div className='text'>
                  <div>
                    <b>Improves SEO</b>
                  </div>
                  <div>
                    Content writing helps boost important SEO terms to rank
                    higher in Google.
                  </div>
                </div>
              </Col>
              <Col className='description-2' xs='6'>
                <div>
                  <img src='/pictures/trust.png' alt='trust' />
                </div>
                <div className='text'>
                  <div>
                    <b>Relays Trust</b>
                  </div>
                  <div>
                    Trust is earned. To earn trust, content writing is the key.
                    This results in long-term patients.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='description' xs='6'>
                <div>
                  <img src='/pictures/more-clients.png' alt='more-clients' />
                </div>
                <div className='text'>
                  <div>
                    <b>Converts Visitors Into Clients</b>
                  </div>
                  <div>
                    Website visitors turn into patients after understanding your
                    business and trusting your expertise.
                  </div>
                </div>
              </Col>
              <Col className='description-2' xs='6'>
                <div>
                  <img src='/pictures/education.png' alt='education' />
                </div>
                <div className='text'>
                  <div>
                    <b>Educates the Clients</b>
                  </div>
                  <div>
                    A simple understanding of the process and your expertise
                    goes a long way for client satisfaction.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <h3>How We Grow Your Practice With Content Writing</h3>
          CHANGE THE IMAGE HERE IT SAYS DENTIST STILL
          <br />
          <img
            src='/pictures/content-writing-graphic.jpg'
            alt='content-writing-graphic'
          />
        </div>
        <br />
        <br />
        <NoWebsiteCTA />
      </div>
    );
  }
}

export default ContentWriting;
