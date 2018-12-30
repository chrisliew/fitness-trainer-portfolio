import React, { Component } from 'react';
import axios from 'axios';

class PricingForm extends Component {
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

  handleOnSubmit = () => {
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
    alert(
      'Thanks For submitting your info, someone from FitnessTrainerGains will be in touch.'
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

export default PricingForm;
