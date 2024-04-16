const initialState = {
  movies: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "GET_TODOS":
    //   return action.todos.data;
    case 'GET_MOVIES':
      return action.movies.data;

    case 'ADD_TODO':
      return [action.todo.data, ...state.movies];
    default:
      return state.movies;
  }
};

const initialStateSection = {
  moviesSection: [],
};
export const reducerSection = (state = initialStateSection, action) => {
  switch (action.type) {
    case 'GET_MOVIES_SECTION':
      return action.moviesSection.data;
    default:
      return state.moviesSection;
  }
};
export default todoReducer;
