import $ from 'jquery';
import React from 'react';
import Header from './common/header';
import ReactRouter from 'react-router';

let RouteHandler = ReactRouter.RouteHandler;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

export default App;