"use strict";

import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This app uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Babelify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default About;