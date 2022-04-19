const initialState = {
  movies: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "GET_TODOS":
    //   return action.todos.data;
    case "GET_MOVIES":
      return action.movies.data;
    case "ADD_TODO":
      console.log(action);
      return [action.todo.data, ...state.movies];
    default:
      return state.movies;
  }
};

export default todoReducer;
