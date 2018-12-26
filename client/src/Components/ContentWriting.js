import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';

class ContentWriting extends Component {
  render() {
    return (
      <div className='content-writing'>
        <TopBanner introTitle='Content Writing for Fitness Trainers' />
        <AppNavbar />
        <div className='content-writing-container'>
          <Jumbotron className='title'>
            <h2>Content Writing for Fitness Trainers</h2>
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
        </div>
      </div>
    );
  }
}

export default ContentWriting;
