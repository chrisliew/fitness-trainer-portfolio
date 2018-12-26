const nodemailer = require('nodemailer');
const keys = require('../../keys');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.sendGridKey);

// @route   POST /api/email
// @desc    Send emails from forms
// @access  Public
module.exports = app => {
  app.post('/api/email/website', (req, res) => {
    const msg = {
      to: req.body.email,
      from: 'FitnessTrainerGains@example.com',
      subject: 'Request for Free Website Analysis Received',
      html: `
        <div>Hello ${req.body.name},</div>
        <p>Thanks for submitting a request for a free website analysis for your website: ${
          req.body.url
        }.  A member of our team will contact you shortly.</p>
        <p>From your friends at 
          <a href='fitnesstrainergains.com'>FitnessTrainerGains.com</a>
        </p>
      `
    };
    sgMail.send(msg);
  });

  app.post('/api/email/contact', (req, res) => {
    const msg = {
      to: 'chriswvliew@gmail.com',
      from: req.body.contactEmail,
      subject: 'Contact Form for Fitnesstrainergains.com Received',
      html: `
        <div>Name: ${req.body.contactName}</div>
        <div>Email: ${req.body.contactEmail}</div>
        <div>Number: ${req.body.contactNumber}</div>
        <div>Message: ${req.body.message}</div>
      `
    };
    sgMail.send(msg);
  });
};
