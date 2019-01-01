import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert';

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

  handleOnSubmit = event => {
    event.preventDefault();
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

export default withAlert(ContactForm);
