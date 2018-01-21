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
          <a className='nav-item' href='https://github.com/yokyak/react-agent' target='_blank'>
            Github
          </a>
          <div id='logo'>
            React Agent
          </div>
          <div id='logo-small'>
            R A
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