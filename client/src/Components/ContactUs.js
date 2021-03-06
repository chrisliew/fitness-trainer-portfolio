import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import TopBanner from './TopBanner';
import ContactForm from './ContactForm';

class ContactUs extends Component {
  render() {
    return (
      <div className='contact-us'>
        <TopBanner />
        <AppNavbar />
        <h2>
          <b>Contact Us</b>
        </h2>
        <div className='contact-container'>
          <div className='description'>
            <div className='text'>
              <p>
                If you have any questions, email the relevant department below
                or complete the form and we will get back to you.
              </p>
              <br />
              <div>
                <b>
                  <u>SALES:</u>
                </b>
              </div>
              <div>sales@fitnesstrainergains.com</div>
              <br />
              <div>
                <b>
                  <u>BILLING:</u>
                </b>
              </div>
              <div>billing@fitnesstrainergains.com</div>
              <br />
              <div>
                <b>
                  <u>GENERAL:</u>
                </b>
              </div>
              <div>general@fitnesstrainergains.com</div>
            </div>
          </div>
          <div className='form'>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
