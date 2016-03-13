"use strict";

import React from 'react';
import Router from 'react-router';
import AuthorActions from '../../actions/authorActions';
import toastr from 'toastr';

let Link = Router.Link;

class AuthorList extends React.Component {
  constructor(props) {
    super(props);

  }
  deleteAuthor(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  }
  render() {
    let createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = { 
  authors: React.PropTypes.array.isRequired
};

export default AuthorList;