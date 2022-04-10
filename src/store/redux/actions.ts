import { commingSoonMovies } from "../../api/axios";
import axios from "axios";

// export const getTodos = () => {
//   return (dispatch) => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts`)
//       .then((todos) => {
//         dispatch({ type: "GET_TODOS", todos });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };
// };

export const getAllMovies = () => {
  return (dispatch) => {
    commingSoonMovies
      .get(``)
      .then((movies) => {
        dispatch({ type: "GET_MOVIES", movies });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addTodo = (todo) => {
  return (dispatch, getState) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, todo)
      .then((todo) => {
        dispatch({ type: "ADD_TODO", todo });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
