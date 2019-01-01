import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import axios from 'axios';
import { withAlert } from 'react-alert';

class WebsiteAnalysisForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      name: '',
      url: '',
      phone: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      email: '',
      name: '',
      url: '',
      phone: ''
    });
  }

  handleOnChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const clientInfo = {
      name: this.state.name,
      email: this.state.email,
      url: this.state.url,
      phone: this.state.phone
    };
    axios
      .post('/api/email/website', clientInfo)
      .then(console.log('Website Analysis Request Form Sent'))
      .catch(error => {
        return error;
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
      <div className='website-analysis-form-container'>
        <Button color='danger' onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className='modal-header' toggle={this.toggle}>
            <div>Free Website Analysis ($400 Value!)</div>
          </ModalHeader>

          <Form
            ref='form'
            onSubmit={this.handleOnSubmit}
            className='website-analysis-form'
            autoComplete='off'
          >
            <div className='description'>
              We will go through your website and provide you with actionable
              advice to get more clients.
            </div>
            <br />
            <FormGroup>
              <Label for='website-url'>
                <b>Website URL *</b>
              </Label>
              <Input
                name='url'
                id='website-url'
                onChange={this.handleOnChange}
                value={this.state.url}
                placeholder='eg. www.example.com'
              />
            </FormGroup>
            <FormGroup>
              <Label for='email'>
                <b>Email *</b>
              </Label>
              <Input
                type='email'
                name='email'
                id='email'
                onChange={this.handleOnChange}
                value={this.state.email}
                placeholder='Free report will be sent to this email'
              />
            </FormGroup>
            <FormGroup>
              <Label for='name'>
                <b>Name</b>
              </Label>
              <Input
                onChange={this.handleOnChange}
                type='name'
                name='name'
                id='name'
                placeholder='Enter Name'
                value={this.state.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for='phone'>
                <b>Contact</b>
              </Label>
              <Input
                type='tel'
                name='phone'
                id='phone'
                placeholder='Contact Number'
                onChange={this.handleOnChange}
              />
            </FormGroup>
            <ModalFooter>
              <Button
                type='submit'
                color='primary'
                onClick={this.toggleValidateEmail}
              >
                Submit
              </Button>{' '}
              <Button color='secondary' onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default withAlert(WebsiteAnalysisForm);
