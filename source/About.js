import React, { Component } from 'react';
import htmlContent from './README.html';
import Codeblock from 'react-uikit-codeblock';

class About extends Component {
  render() {
    return (
      <div id='container'>
        <div className='about' id='content'>
          <h2>Getting Started</h2>
          <div id='code-snippets'>
            <div>
              <h3>React</h3>
              <pre className="prettyprint lang-bsh">
                {'npm install react-agent --save'}
              </pre>
              <pre className="prettyprint lang-js">
                {'import { Agent } from \'react-agent\' \n\n'}
                {'render(\n'}
                {'<Agent>\n'}
                {'  <App />\n'}
                {'</Agent>\n'}
                {', document.querySelector(\'#root\'))'}
              </pre>
            </div>
            <div>
              <h3>Node / Express</h3>
              <pre className="prettyprint lang-bsh">
                {'npm install react-agent-server --save'}
              </pre>
              <pre className="prettyprint lang-js">
                {'const agent = require(\'react-agent-server\') \n\n'}
                {'const server = app.listen(3000)\n\n'}
                {'const actions = {\n'}
                {'  getMessages: {\n'}
                {'    action: \'SELECT * FROM posts\'\n'}
                {'  }\n'}
                {'}\n\n'}
                {'const database = { user: react-agent }\n\n'}
                {'agent(server, actions, database)'}
              </pre>
            </div>
          </div>
          <h2>The Team</h2>
          <div id='team'>
            <div>
              Eric Choi
            </div>
            <div>
              Andrew Harris
            </div>
            <div>
              Henry Au
            </div>
            <div>
              Tom Rosenblatt
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
