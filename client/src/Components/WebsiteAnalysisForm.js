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
      modal: !this.state.modal
    });
  }

  handleOnChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  handleOnSubmit = () => {
    const clientInfo = {
      name: this.state.name,
      email: this.state.email,
      url: this.state.url,
      phone: this.state.phone
    };
    axios.post('/api/email/website', clientInfo).then(res => {
      console.log('REZZZ', res);
    });
  };

  render() {
    console.log(this.state.email);
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
                // type='url'
                name='url'
                id='website-url'
                value={this.state.url}
                placeholder='eg. www.example.com'
                onChange={this.handleOnChange}
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
                value={this.state.email}
                placeholder='Free report will be sent to this email'
                onChange={this.handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for='name'>
                <b>Name</b>
              </Label>
              <Input
                type='name'
                name='name'
                id='name'
                placeholder='Enter Name'
                onChange={this.handleOnChange}
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

export default WebsiteAnalysisForm;
