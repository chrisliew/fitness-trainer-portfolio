import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='navbar-custom app-navbar'>
        <Navbar dark expand='md'>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link id='link-custom' to='/marketing-solutions'>
                  Marketing Solutions
                </Link>
              </NavItem>
              <NavItem>
                <Link id='link-custom' to='/our-work'>
                  Our Work
                </Link>
              </NavItem>
              <NavItem>
                <Link id='link-custom' to='/growth-tips'>
                  Growth Tips
                </Link>
              </NavItem>
              <NavItem>
                <Link id='link-custom' to='/about'>
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link id='link-custom' to='/contact-us'>
                  Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
