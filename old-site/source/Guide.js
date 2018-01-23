import React, { Component } from 'react';
import htmlContent from './README.html'; 

class Guide extends Component {
  render() {
    return (
      <div id='container'>
        <div id='content' dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    );
  }
}

export default Guide;
