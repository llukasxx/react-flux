"use srtict";

import React from 'react';
import Router from 'react-router';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import toastr from 'toastr';

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  author: { id: '', firstName: '', lastName: ''},
                  errors: {},
                  dirty: false 
                };

    this.setAuthorState = this.setAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }
  static willTransitionFrom(transition, component) {
    if(component.state.dirty && !confirm('Leave without saving?')) {
      transition.abort();
    }
  }
  setAuthorState(event) {
    this.setState({dirty: true});
    let field = event.target.name;
    let value = event.target.value;
    this.state.author[field] = value;
    this.setState({author: this.state.author});
  }
  authorFormIsValid() {
    let formIsValid = true;
    this.state.errors = {};

    if(this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }
    if(this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }
    this.setState({errors: this.state.errors});

    return formIsValid;
  }
  saveAuthor(event) {
    event.preventDefault();
    if(!this.authorFormIsValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    this.setState({dirty: false});
    toastr.success(`Author ${this.state.author.firstName} ${this.state.author.lastName} saved.`);
    this.context.router.transitionTo('/authors');
  }
  componentWillMount() {
    let authorId = this.props.params.id;
    if (authorId) {
      this.setState({author: AuthorApi.getAuthorById(authorId)});
    }
  }
  render() {
    return (
      <div>
        <AuthorForm 
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
        />
      </div>
      );
  }
}

ManageAuthorPage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default ManageAuthorPage;