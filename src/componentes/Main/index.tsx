import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Box from '@mui/material/Box';
import OtherReleases from '../OtherReleases';
import Section from '../Section';
import { formatMonth, formatDate } from '../../utils/data';
import { ordenationArrayData } from '../../utils/ordenation';
import { MainContainer, Container, MainLeft, Card, TimeLine } from './styles';
import { getAllMovies } from '../../store/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state['movies']);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const moviesOrdenation = ordenationArrayData(movies, ['release_date']);

  const width = window.innerWidth;

  return (
    <div style={width && { marginTop: "35%" }}>
      <OtherReleases />
      <MainContainer>
        <MainLeft style={width < 700 && { width: '80%', margin: '10%' }}>
          <TimeLine />
          <Container>
            <>
              <h1 className="h2Class">
                Filmes de{' '}
                <span className="itemMes" role="month">
                  {monthDate}
                </span>
              </h1>
              {moviesOrdenation.length > 0 ? (
                <>
                  {moviesOrdenation.map((film) => {
                    const itemData = formatDate(film['release_date']);
                    if (itemData.includes(monthDate)) {
                      return (
                        <Card key={film['_id']}>
                          <div className="card">
                            <h2 className="titleItem">
                              <a
                                data-testid="nomeFilme"
                                href={`/${film['_id']}`}
                              >
                                {film['name']}
                              </a>{' '}
                            </h2>
                            <p className="releaseItem"> {itemData}</p>
                            <p className="overviewItem">{film['overview']}</p>
                          </div>
                          <div className="cardMedia">
                            <div className="posterItem">
                              <img src={`${film['poster']}`} />
                            </div>
                            <div className="videoItem">
                              <iframe
                                src={`https://www.youtube.com/embed/${film['trailer']}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              ></iframe>
                            </div>
                          </div>
                          <div className="buttonGenre">
                            {film['genre'].map((x, index) => {
                              const genresString = x;
                              const genresArray = genresString.split(',');

                              return genresArray.map((item) => (
                                <p
                                  key={item}
                                  style={{ fontWeight: 'bold' }}
                                  className="pbuttonGenre"
                                >
                                  {item}
                                </p>
                              ));
                            })}
                          </div>
                        </Card>
                      );
                    }
                  })}
                </>
              ) : (
                <Box
                  component="div"
                  sx={{
                    margin: 10,
                  }}
                >
                  <CircularProgress
                    color="secondary"
                    thickness={10}
                    size={90}
                  />
                </Box>
              )}
            </>
          </Container>
        </MainLeft>
        {width > 700 && <Section />}
      </MainContainer>
      {width < 700 && <Section mobile />}
    </div>
  );
};

export default Main;
