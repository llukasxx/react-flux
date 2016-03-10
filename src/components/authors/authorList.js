"use strict";

import React from 'react';
import AuthorApi from '../../api/authorApi';

class AuthorList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
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