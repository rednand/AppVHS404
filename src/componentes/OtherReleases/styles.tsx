import styled from 'styled-components';

export const NextReleases = styled.div`
  margin: 5% 2% 4%;
  height: max-content;
  background-color: #ffffff;
  width: 96%;

  .allMoviesDiv {
    grid-gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, auto));
  }

  h3 {
    text-align: center;
    font-family: 'Bebas Neue', cursive;
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
    height: 38vh;
    width: 55%;
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
    margin: 10% 2% 4%;
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
    margin: 12% 2% 4%;
    h3 {
      font-size: 4vw;
      padding: 3%;
    }
    .allMoviesDiv > div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }
    .soonPoster {
      width: 90%;
      height: 12rem;
    }
    .soon {
      font-size: 2.6vw;
    }
  }
  @media (max-width: 400px) {
    margin: 16% 2% 4%;
    h3 {
      font-size: 6vw;
      padding: 4%;
    }
    .allMoviesDiv {
      display: block;
    }
    .soon {
      width: 50%;
      font-size: 4.5vw;
    }
    .soonPoster {
      width: 90%;
      height: 15rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;
