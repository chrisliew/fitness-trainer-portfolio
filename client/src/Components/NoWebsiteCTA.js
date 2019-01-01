import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron } from 'reactstrap';
import { withAlert } from 'react-alert';

class NoWebsiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noWebsiteName: '',
      noWebsiteEmail: '',
      noWebsiteNumber: '',
      city: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const clientInfo = {
      noWebsiteName: this.state.noWebsiteName,
      noWebsiteEmail: this.state.noWebsiteEmail,
      noWebsiteNumber: this.state.noWebsiteNumber,
      city: this.state.city
    };
    axios
      .post('/api/email/noWebsite', clientInfo)
      .then(console.log('Sent email with No Website Info'))
      .catch(error => {
        return error;
      });
    this.setState({
      noWebsiteName: '',
      noWebsiteEmail: '',
      noWebsiteNumber: '',
      city: ''
    });

    this.props.alert.show(
      'Thank you for submitting your contact info.  An expert at Fitness Trainer Gains will contact you shortly.',
      {
        type: 'success',
        onOpen: () => {
          console.log('successfully sent email');
        }, // callback that will be executed after this alert open
        onClose: () => {
          console.log('closed');
        } // callback that will be executed after this alert is removed
      }
    );
  };

  render() {
    return (
      <div className='no-website-form'>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            name='noWebsiteName'
            title='name'
            placeholder='Name'
          />
          <input
            onChange={this.handleOnChange}
            name='noWebsiteEmail'
            title='email'
            placeholder='Email'
          />
          <input
            onChange={this.handleOnChange}
            name='noWebsiteNumber'
            title='number'
            placeholder='Contact Number'
          />
          <input
            onChange={this.handleOnChange}
            name='city'
            title='city'
            placeholder='City'
          />
          <br />
          <button
            className='submit-form'
            type='submit'
            color='info'
            sz='md'
            width='50%'
          >
            Submit Info
          </button>
        </form>
      </div>
    );
  }
}

class NoWebsiteCTA extends Component {
  render() {
    return (
      <div className='no-website-CTA'>
        <div className='parent'>
          <div className='child-1'>
            <b>If you don't have a website,</b> complete this short form and we
            will get back to you:
            <NoWebsiteForm alert={this.props.alert} />
          </div>
          <div className='child-2'>
            <b>If you have a website,</b> get a free marketing analysis worth
            $399 (<i>done by people - not software</i>):
            <br />
            <br />
            <button className='free-analysis-button'>
              Get My Free Website Analysis
            </button>
          </div>
        </div>
        <Jumbotron className='statement'>
          <h2>
            <b>
              <div>We focus on getting you more clients,</div>
              <div>while you focus on running your business</div>
            </b>
          </h2>
        </Jumbotron>
      </div>
    );
  }
}

export default withAlert(NoWebsiteCTA);
