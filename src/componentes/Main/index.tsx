import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import OtherReleases from '../OtherReleases';
import Section from '../Section';
import { formatMonth, formatDate } from '../../utils/data';
import { ordenationArrayData } from '../../utils/ordenation';
import { MainContainer, Container, MainLeft, Card, TimeLine } from './styles';
import { getAllMovies } from '../../store/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import useWindowWidth from '../../utils/windowWidth';
import { getYouTubeEmbedUrl } from '../../utils/youtubelink';

const Main = () => {
  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state['movies']);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const windowWidth = useWindowWidth();

  const moviesOrdenation = ordenationArrayData(movies, ['release_date']);

  const monthMovies = moviesOrdenation
    .map((film) => {
      const itemData = formatDate(film['release_date']);
      if (itemData.includes(monthDate)) {
        return film;
      }
    })
    .filter((item) => item != undefined);

  return (
    <div style={{ marginTop: windowWidth < 700 && '20%' }}>
      <OtherReleases />
      <MainContainer>
        <MainLeft
          style={{
            width: windowWidth < 700 && '80%',
            margin: windowWidth < 700 && '10%',
          }}
        >
          <TimeLine />
          <Container>
            <>
              <h1 className="h2Class">
                Filmes de{' '}
                <span className="itemMes" role="month">
                  {monthDate}
                </span>
              </h1>
              {monthMovies.length > 0 && (
                <>
                  {monthMovies.map((item) => {
                    return (
                      <Card key={item['_id']}>
                        <div className="card">
                          <h2 className="titleItem">
                            <a
                              data-testid="nomeFilme"
                              href={`/${item['_id']}`}
                            >
                              {item['name']}
                            </a>{' '}
                          </h2>
                          <p className="releaseItem"> {formatDate(item["release_date"])}</p>

                          <p className="overviewItem">{item['overview']}</p>
                        </div>
                        <div className="cardMedia">
                          <div className="posterItem">
                            <img src={`${item['poster']}`} />
                          </div>
                          <div className="videoItem">
                            <iframe
                              src={getYouTubeEmbedUrl(item.trailer)}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                          </div>
                        </div>
                        <div className="buttonGenre">
                          {item['genre']?.map((x, index) => {
                            const genresString = x;
                            const genresArray = genresString.split(',');

                            return genresArray.map((item) => (
                              <p
                                key={item}
                                style={{ fontWeight: 'bold', textTransform: "capitalize" }}
                                className="pbuttonGenre"
                              >
                                {item}
                              </p>
                            ));
                          })}
                        </div>
                      </Card>)
                  })}
                </>
              )}
              {monthMovies.length === 0 && (
                <Box component="div" className="noMovies">
                  <Typography style={{ margin: '6%', padding: '6%' }}>
                    Nenhum filme este mês
                  </Typography>
                </Box>
              )}
            </>
          </Container>
        </MainLeft>
        {windowWidth > 700 && <Section />}
      </MainContainer>
      {windowWidth < 700 && <Section mobile />}
    </div>
  );
};

export default Main;
