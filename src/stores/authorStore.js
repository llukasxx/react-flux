"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import Events from 'events';
import _ from 'lodash';

let EventEmitter = Events.EventEmitter;

var _authors = [];

let AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  emitChange: function () {
    this.emit('change');
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      let existingAuthor = _.find(_authors, {id: action.author.id});
      let existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
  }
});

export default AuthorStore;