"use strict";

import React from 'react';
import AuthorStore from '../../stores/authorStore';
import AuthorActions from '../../actions/authorActions';
import AuthorList from './authorList';
import Router from 'react-router';


let Link = Router.Link;

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authors: AuthorStore.getAllAuthors()};
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  }
  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add author</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

export default AuthorPage;