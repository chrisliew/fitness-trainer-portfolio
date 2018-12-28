import React from 'react';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component {
  render() {
    return (
      <div className='app-navbar'>
        <Link to='/marketing-solutions'>Marketing Solutions</Link>
        <Link to='/our-work'>Our Work</Link>
        <Link to='/growth-tips'>Growth Tips</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </div>
    );
  }
}

export default AppNavbar;
