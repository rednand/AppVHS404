const initialState = {
  movies: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.movies.data;

    case 'ADD_TODO':
      return [action.todo.data, ...state.movies];
    default:
      return state.movies;
  }
};

export default todoReducer;
