import React, { useEffect, useState } from 'react';
import Footer from '../../componentes/Footer';
import { MovieGetId } from '../../api/axios';
import { useParams } from 'react-router-dom';
import {
  MainMovieId,
  ImageMovieId,
  ImageInfos,
  MovieInfos,
  ImageMovieIdMobile,
} from './styles';
import { formatDate, formatDateMovieId } from '../../utils/data';
import { getYouTubeEmbedUrl } from '../../utils/youtubelink';
import useWindowWidth from '../../utils/windowWidth';

const MovieId = () => {
  const [movieInfo, setMovieInfo] = useState({ movies: [] });
  const { id } = useParams();

  useEffect(() => {
    MovieGetId.get(`${id}`).then((response) => {
      setMovieInfo(response.data);
    });
  }, []);

  const windowWidth = useWindowWidth();

  return (
    <>
      <MainMovieId>
        <h1>{movieInfo.movies['name']}</h1>
        <ImageInfos
          style={{
            paddingLeft: windowWidth < 1000 && '10%',
            paddingRight: windowWidth < 1000 && '10%',
            paddingBottom: windowWidth < 1000 && '15%',
          }}
        >
          {windowWidth >= 1000 && (
            <ImageMovieId src={movieInfo.movies['poster']} alt="" />
          )}
          <MovieInfos
            style={{
              width: windowWidth >= 1000 ? ' 50%' : '100%',
            }}
          >
            <div
              style={{
                width: '100%',
              }}
            >
              <p>
                <span>Lançamento: </span>
                {formatDateMovieId(movieInfo.movies['release_date'])}
              </p>
              <p>
                <span>Sinopse: </span> {movieInfo.movies['overview']}
              </p>
              <p
                style={{
                  marginBottom: windowWidth < 1000 ? '15%' : "5%",
                }}
              >
                <span>Título Original: </span>
                {movieInfo.movies['original_title']}
              </p>
              {windowWidth < 1000 && (
                <ImageMovieIdMobile src={movieInfo.movies['poster']} alt="" />
              )}
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  maxWidth: '100%',
                  background: '#000',
                  marginTop: '1rem',
                }}
              >
                <iframe
                  src={
                    movieInfo?.movies['trailer']
                      ? getYouTubeEmbedUrl(movieInfo?.movies['trailer'])
                      : movieInfo?.movies['trailer']
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </div>
          </MovieInfos>
        </ImageInfos>
      </MainMovieId>
      <Footer />
    </>
  );
};

export default MovieId;
