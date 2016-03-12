"use strict";

import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';
import ManageAuthorPage from './manageAuthorPage';
import Router from 'react-router';


let Link = Router.Link;

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authors: AuthorApi.getAllAuthors()};
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