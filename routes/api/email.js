const nodemailer = require('nodemailer');
const keys = require('../../keys');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.sendGridKey);

// @route   TEST /api/email/test
// @desc    Test email
// @access  Public
module.exports = app => {
  app.post('/api/email/website', (req, res) => {
    console.log('REQBODY', req.body);

    const msg = {
      to: req.body.email,
      from: 'FitnessTrainerGains@example.com',
      subject: 'Request for Free Website Analysis Received',
      text: 'and easy to do anywhere, even with Node.js',
      html: `
        <strong>Hello ${req.body.name},</strong>
      `
    };
    sgMail.send(msg);
  });
};
