import Ember from 'ember';

export default Ember.Component.extend({
  filterValues: ['ALL', 'DONE', 'UNDONE'],

  visibleTodos: Ember.computed('state.todos', 'state.filter', function(){
    const todos = this.get('state.todos');
    switch(this.get('state.filter')) {
      case 'ALL':
        return todos;
      case 'DONE':
        return todos.filter((todo) => todo.done);
      case 'UNDONE':
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  }),

  newText: Ember.computed('state.todos', function(){
    const todos = this.get('state.todos') || [];
    return 'To do ' + todos.length;
  }),

  actions: {
    addTodo(){
      const text = this.get('newText');
      this.sendAction('dispatchAction', { type: 'ADD_TODO', text });
    },

    toggleTodo(index){
      this.sendAction('dispatchAction', { type: 'TOGGLE_TODO', index });
    },

    setFilter(filter){
      this.sendAction('dispatchAction', { type: 'SET_FILTER', filter });
    }
  }
});
