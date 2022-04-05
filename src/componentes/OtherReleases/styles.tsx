import styled from "styled-components";

export const NextReleases = styled.div`
  margin: 5% 2% 1%;
  height: max-content;
  background-color: #ffffff;
  width: 96%;

  .allMoviesDiv {
    display: flex;
    justify-content: space-evenly;
  }

  h3 {
    text-align: center;
    font-family: "Bebas Neue", cursive;
    font-size: 2rem;
    padding: 1%;
  }
  .soon {
    display: inline-block;
    font-size: 1.5vw;
    font-weight: 600;
    z-index: 6;
    background-color: rgba(255, 255, 255, 0.6);

    a {
      text-decoration: none;
    }
  }

  .nameSoon {
    color: var(--bg900);
    text-decoration: none;
    padding: 3% 0;
    text-align: center;
    text-transform: uppercase;
  }
  .soonPoster {
    height: 18rem;
    width: 95%;
    object-fit: cover;
    object-position: center;

    :hover {
      filter: inherit;
      -webkit-filter: grayscale(1000%);
    }
  }
  .soonPoster2 {
    text-align: center;
  }
  .soonData {
    text-align: center;
    padding: 0.1% 0% 10%;
  }

  @media (max-width: 1200px) {
    .soonPoster {
      height: 15rem;
      width: 85%;
    }
  }
  @media (max-width: 900px) {
    margin: 10% 2% 1%;
    h3 {
      font-size: 3vw;
      padding: 2%;
    }
    .allMoviesDiv > div:nth-child(5) {
      display: none;
    }
    .soon {
      font-size: 2vw;
    }
  }
  @media (max-width: 700px) {
    .allMoviesDiv > div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }
    .soonPoster {
      width: 90%;
      height: 12rem;
    }
    .soon {
      font-size: 2.5vw;
    }
  }
  @media (max-width: 400px) {
    .allMoviesDiv {
      display: block;
    }
  }
`;
