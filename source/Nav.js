import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div id='nav'>
        <div id='inner-nav'>
          <Link to='/' className='nav-item'>
            About
          </Link>
          <a className='nav-item'>
            Github
          </a>
          <div className='nav-item' id='logo'>
            LOGO
          </div>
          <Link to='/guide' className='nav-item'>
            Guide
          </Link>
          <Link to='/docs' className='nav-item'>
            Docs
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;