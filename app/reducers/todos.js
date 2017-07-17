const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [ ...state, 
        {
          text: action.text || 'new todo',
          done: false,
          index: state.length
        }
      ];
    case 'TOGGLE_TODO':
      // Reducer cannot modify state; make a new one instead.
      return state.map((todo) => {
        if(action.index === todo.index) {
          const { text, id, done } = todo;
          return { text, id, done: !done };
        } else {
          return todo;
        }        
      });
    default:
      return state;
  }
};

export default todos;