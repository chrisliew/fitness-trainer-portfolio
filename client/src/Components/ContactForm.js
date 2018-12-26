import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      contactNumber: '',
      message: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = () => {
    const clientInfo = {
      contactName: this.state.contactName,
      contactEmail: this.state.contactEmail,
      contactNumber: this.state.contactNumber,
      message: this.state.message
    };
    axios
      .post('/api/email/contact', clientInfo)
      .then(console.log('Sent email with Contact Info'))
      .catch(error => {
        return error;
      });
    this.setState({
      contactName: '',
      contactEmail: '',
      contactNumber: '',
      message: ''
    });
    alert(
      'Thanks For submitting your info, someone from FitnessTrainerGains will be in touch.'
    );
  };

  render() {
    return (
      <div className='contact-form'>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            name='contactName'
            title='name'
            placeholder='Name'
          />
          <input
            onChange={this.handleOnChange}
            name='contactEmail'
            title='email'
            placeholder='Email'
          />
          <input
            onChange={this.handleOnChange}
            name='contactNumber'
            title='number'
            placeholder='Contact Number'
          />
          <textarea
            onChange={this.handleOnChange}
            className='message'
            name='message'
            title='message'
            placeholder='Message'
          />
          <br />
          <button
            className='submit-form'
            type='submit'
            color='info'
            sz='md'
            width='50%'
          >
            Submit Contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
