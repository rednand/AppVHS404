import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import { MovieGetId } from "../../api/axios";
import { useParams } from "react-router-dom";
import { MainMovieId, ImageMovieId, ImageInfos, MovieInfos } from "./styles";
import { formatDate } from "../../utils/data";

const MovieId = () => {
  const [movieInfo, setMovieInfo] = useState({ movies: [] as any[] });
  const { id } = useParams();

  useEffect(() => {
    MovieGetId.get(`${id}`).then((response) => {
      setMovieInfo(response.data);
    });
  }, []);

  console.log(movieInfo.movies);

  return (
    <>
      <MainMovieId>
        <h1>{movieInfo.movies["name"]}</h1>
        <ImageInfos>
          <ImageMovieId src={movieInfo.movies["poster"]} alt="" />
          <MovieInfos>
            <div className="infos">
              <p>
                <span>Lançamento: </span>
                {formatDate(movieInfo.movies["release_date"])}
              </p>
              <p>
                <span>Sinopse: </span> {movieInfo.movies["overview"]}
              </p>
              <p>
                <span>Título Original: </span>
                {movieInfo.movies["original_title"]}
              </p>
              <p>
                <span>Língua Original: </span>
                {movieInfo.movies["original_language"]}
              </p>
              <iframe
                src={`https://www.youtube.com/embed/${movieInfo.movies["trailer"]}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </MovieInfos>
        </ImageInfos>
      </MainMovieId>
      <Footer />
    </>
  );
};

export default MovieId;
