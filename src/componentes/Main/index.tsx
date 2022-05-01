import React, { useEffect } from "react";
import { CircularProgress, Box } from "@material-ui/core";
import OtherReleases from "../OtherReleases";
import Section from "../Section";
import { formatMonth, formatDate } from "../../utils/data";
import { ordenationArrayData } from "../../utils/ordenation";
import { MainContainer, Container, MainLeft, Card, TimeLine } from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../store/redux/actions";

const Main = () => {
  const todaysDate = new Date();
  const monthDate = formatMonth(todaysDate);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state["movies"]);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  ordenationArrayData(movies, ["release_date"]);

  return (
    <>
      <OtherReleases />
      <MainContainer>
        <MainLeft>
          <TimeLine />
          <Container>
            <>
              <h1 className="h2Class">
                Filmes de <span className="itemMes">{monthDate}</span>
              </h1>
              {movies.length > 0 ? (
                <>
                  {movies.map((film) => {
                    const itemData = formatDate(film["release_date"]);
                    if (itemData.includes(monthDate)) {
                      return (
                        <Card key={film["_id"]}>
                          <p className="releaseItem"> {itemData}</p>
                          <h2 className="titleItem">
                            <a href={`/${film["_id"]}`}>{film["name"]}</a>{" "}
                          </h2>
                          <p className="overviewItem">{film["overview"]}</p>
                          <div className="cardMedia">
                            <div className="posterItem">
                              <img
                                src={`${film["poster"]}`}
                                alt={`poster${film["poster"]}`}
                              />
                            </div>
                            <div className="videoItem">
                              <iframe
                                src={`https://www.youtube.com/embed/${film["trailer"]}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              ></iframe>
                            </div>
                          </div>
                          <div className="buttonGenre">
                            {film["genre"].map((x, index) => {
                              return (
                                <p key={film["genre"][index]}>
                                  <button
                                    className="pbuttonGenre"
                                    onClick={() =>
                                      console.log("pegar filmes por gênero")
                                    }
                                  >
                                    {film["genre"][index]}
                                  </button>
                                </p>
                              );
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
                    margin: 50,
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
        <Section />
      </MainContainer>
    </>
  );
};

export default Main;
