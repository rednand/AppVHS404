import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, getMovies } from '../../store/redux/actions';
import { NextReleases } from './styles';
import { Box } from '@mui/material';
import { formatDate } from '../../utils/data';
import { CircularProgress, Typography } from '@material-ui/core';
import Footer from './../../componentes/Footer';

const Filmes = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state['movies']);

  const { data, isLoading } = getMovies();

  useEffect(() => {
    if (!!data) {
      dispatch(getAllMovies(data));
    }
  }, [dispatch, data]);

  return (
    <>
      <NextReleases>
        <h4>Todos os filmes registrados</h4>
        <div className="allMoviesDiv">
          {isLoading ? (
            <Box
              className="noMovies"
              component="div"
              sx={{
                margin: 10,
              }}
            >
              <CircularProgress color="secondary" thickness={10} size={90} />
            </Box>
          ) : movies?.length > 0 ? (
            <>
              {movies.map((film) => {
                return (
                  <div className="soon" key={film._id}>
                    <p className="soonData"> {formatDate(film.release_date)}</p>

                    <a href={`/${film._id}`}>
                      <div className="soonPoster2">
                        <img
                          className="soonPoster"
                          src={`${film.poster}`}
                          alt={`${film.name}`}
                        />
                        <div className="altText">{`${film.name}`}</div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </>
          ) : (
            <Box component="div" className="noMovies">
              <Typography
                style={{
                  margin: '6%',
                  padding: '6%',
                  color: 'var(--palletered0)',
                }}
              >
                Nenhum filme encontrado
              </Typography>
            </Box>
          )}
        </div>
      </NextReleases>
      <Footer />
    </>
  );
};

export default Filmes;
