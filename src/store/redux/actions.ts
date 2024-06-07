import { useQuery } from 'react-query';
import { commingSoonMovies } from '../../api/axios';
import axios from 'axios';

export const getAllMovies = (movies) => {
  return (dispatch) => {
    dispatch({ type: 'GET_MOVIES', movies });
  };
};

export const getMovies = () => {
  return useQuery(['getAllMovies'], async () => {
    const { data } = await commingSoonMovies.get(`?page=1`);

    return {
      data,
    };
  });
};

export const addInfoMovie = (infos) => {
  return (dispatch, getState) => {
    axios
      .post(`https://api-quarto237.onrender.com/inform`, infos)
      .then((todo) => {
        dispatch({ type: 'ADD_TODO', todo });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
