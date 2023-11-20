import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../store/redux/actions';
import { NextReleases } from './styles';
import { Box, CircularProgress } from '@mui/material';
import { formatDate } from "../../utils/data"

const Filmes = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const movies = useSelector((state) => state['movies']);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return <NextReleases>
    <h4>Todos os filmes registrados</h4>
    <div className="allMoviesDiv">
      {movies?.length > 0 ? (
        <>
          {movies.map((film) => {
            return (
              <div className="soon" key={film._id}>
                <a href={`/${film._id}`}>
                  <h2 className="nameSoon"> {film.name}</h2>
                  <div className="soonPoster2">
                    <img
                      className="soonPoster"
                      src={`${film.poster}`}
                      alt={`poster${film.poster}`}
                    />
                  </div>
                </a>
                <p className="soonData"> {formatDate(film.release_date)}</p>
              </div>
            );
          })}
        </>
      ) : (
        <Box
          component="div"
          sx={{
            margin: 10,
          }}
        >
          <CircularProgress color="secondary" thickness={10} size={90} />
        </Box>
      )}
    </div>
  </NextReleases>;
};

export default Filmes;
