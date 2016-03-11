import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome to the React Flux Starter Kit</h1>
        <p>
          React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap. Build a React and Flux app from scratch using this starter kit.
        </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default Home;