import React from 'react';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Header from './components/common/header';
import Author from './components/authors/authorPage';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Author />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));