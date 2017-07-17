import { combineReducers } from 'redux';
import todos from 'ember-redux-starter/reducers/todos';
import filter from 'ember-redux-starter/reducers/filter';

export default combineReducers({ todos, filter });