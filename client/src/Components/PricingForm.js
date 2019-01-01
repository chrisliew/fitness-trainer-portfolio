import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert';

class PricingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: 'Standard',
      pricingName: '',
      pricingEmail: '',
      pricingNumber: '',
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
      pricing: this.state.pricing,
      pricingName: this.state.pricingName,
      pricingEmail: this.state.pricingEmail,
      pricingNumber: this.state.pricingNumber,
      city: this.state.city
    };
    axios
      .post('/api/email/pricing', clientInfo)
      .then(console.log('Sent email with Pricing Info'))
      .catch(error => {
        return error;
      });
    this.setState({
      pricing: '',
      pricingName: '',
      pricingEmail: '',
      pricingNumber: '',
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
          <select onChange={this.handleOnChange} name='pricing' title='pricing'>
            <option value='Standard'>Standard</option>
            <option value='Premium'>Premium</option>
          </select>
          <input
            onChange={this.handleOnChange}
            name='pricingName'
            title='name'
            placeholder='Name'
          />
          <input
            onChange={this.handleOnChange}
            name='pricingEmail'
            title='email'
            placeholder='Email'
          />
          <input
            onChange={this.handleOnChange}
            name='pricingNumber'
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

export default withAlert(PricingForm);
