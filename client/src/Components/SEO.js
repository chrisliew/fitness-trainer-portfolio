import React from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import NoWebsiteCTA from './NoWebsiteCTA';

const SEO = () => {
  return (
    <div>
      <TopBanner />
      <AppNavbar />
      <div className='seo'>
        <Jumbotron className='title'>
          <h1>SEO for Fitness Trainers</h1>
        </Jumbotron>
        <p className='paragraph1'>
          Being in the top 3 positions on Google can often mean the difference
          between an overbooked Fitness Trainer Business and one that is
          struggling to get more patients.
          <br />
          <br />
          Through long-term SEO strategies and proven results, we help Fitness
          Trainers rank higher on Google to get more clients.
        </p>
        <img
          className='seo-picture'
          src='pictures/local-seo-dentists.jpg'
          alt='local-seo-dentists'
        />
        <br />
        <br />
        <div className=''>
          <h6>
            SEO is not only limited to the common searches like "Fitness Trainer
            in [your city]".
          </h6>
          <br />

          <p className='paragraph2'>
            Overlooked SEO terms to rank for are:
            <br />
            - "Personal Trainer Lessons"
            <br />
            - "Lose weight exercises"
            <br />
            - "Fitness packages"
            <br />- "Weight loss plans" and many others
            <br />
            <br />
            <br />
            Effective SEO can result in a significant increase in patients which
            means higher profits for the Dentist partners.
          </p>
          <p className='paragraph3'>
            <h3>
              <b>The Importance Of SEO</b>
            </h3>
            To understand the potential of SEO, if your Fitness Trainer Website
            ranks in the top 3 positions for "fitness packages [your city]"
            which receives over 200+ searches per month, your practice could
            easily receive a minimum of 2-3 clients every month.
            <br />
            <br />
            Even if we work on a small amount of $800 for a root canal x 2
            clients = $1,600 per month and $19,200 extra per annum.
            <br />
            <br />
            It's important to note that this is a minor example. Effective SEO
            bundled with various marketing strategies can yield significantly
            higher returns.
            <br />
            <br />
          </p>
          <div className='grow-practice-seo'>
            <h3>How We Grow Your Practice With SEO</h3>
            <Container>
              <Row>
                <Col className='description' xs='6'>
                  <div>
                    <img
                      src='/pictures/keyword-analysis.png'
                      alt='keyword-analysis'
                    />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Keyword Analysis</b>
                    </div>
                    <div>
                      Investigating keyword searches that have the highest
                      potential for converting into clients.
                    </div>
                  </div>
                </Col>
                <Col className='description-2' xs='6'>
                  <div>
                    <img src='/pictures/title-change.png' alt='title-change' />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Title Optimization</b>
                    </div>
                    <div>
                      Relevant use of title tags focused on ideal searches.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col className='description' xs='6'>
                  <div>
                    <img src='/pictures/keyword-url.png' alt='keyword-url' />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Keyword-Rich URLs</b>
                    </div>
                    <div>Optimizing of the URL website structure.</div>
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
                      <b>SEO Content Writing</b>
                    </div>
                    <div>
                      Targeted SEO content creation for Google to understand
                      better.
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
                      src='/pictures/internal-links.png'
                      alt='internal-links'
                    />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Internal Linking</b>
                    </div>
                    <div>
                      Search engines look for roadmaps in your website which is
                      provided by an effective inter-linking structure.
                    </div>
                  </div>
                </Col>
                <Col className='description-2' xs='6'>
                  <div>
                    <img
                      src='/pictures/link-building.png'
                      alt='link-building'
                    />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Link Building</b>
                    </div>
                    <div>
                      Strategic links to your Dentist Practice will help it rank
                      on Google.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col className='description' xs='6'>
                  <div>
                    <img src='/pictures/local-seo.png' alt='local-seo' />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Local SEO</b>
                    </div>
                    <div>
                      Rank in Google Maps, Google Business, local listings and
                      other effective platforms.
                    </div>
                  </div>
                </Col>
                <Col className='description-2' xs='6'>
                  <div>
                    <img
                      src='/pictures/press-release.png'
                      alt='press-release'
                    />
                  </div>
                  <div className='text'>
                    <div>
                      <b>Press Releases</b>
                    </div>
                    <div>
                      Press releases assist with brand awareness, promotions and
                      link building.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <NoWebsiteCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
