import React from 'react';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Header from './components/common/header';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));