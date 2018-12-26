import React from 'react';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component {
  render() {
    return (
      <div className='app-navbar'>
        <div>Marketing Solutions</div>
        <div>Our Work</div>
        <Link to='/growth-tips'>Growth Tips</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </div>
    );
  }
}

export default AppNavbar;
