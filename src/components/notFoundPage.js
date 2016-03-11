"use strict";
import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <p>Whoops! Sorry, there is noting to see there</p>
        <p><Link to="app">Back to home</Link></p>
      </div>
    );
  }
}

export default NotFoundPage;