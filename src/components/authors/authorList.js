"use strict";

import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

class AuthorList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
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