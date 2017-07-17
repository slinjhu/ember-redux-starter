import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return { state };
};

var dispatchToActions = (dispatch) => {
  return {
    dispatchAction: (action) => dispatch(action)
  };
};


export default connect(stateToComputed, dispatchToActions)(
  Ember.Component.extend({
    layout: hbs`{{todo-list state=state dispatchAction=(action "dispatchAction")}}`
  })
);