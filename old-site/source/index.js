import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Nav from './Nav';
import About from './About';
import Guide from './Guide';
import Docs from './Docs';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path='/' component={About} />
            <Route exact path='/guide' component={Guide} />
            <Route exact path='/docs' component={Docs} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
