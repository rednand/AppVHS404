import styled from 'styled-components';

export const NextReleases = styled.div`
  margin: 8% 2% 8%;
  height: max-content;
  background-color: #ffffff;
  width: 96%;
  padding: 2%;

  .allMoviesDiv {
    grid-gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    font-size: 1.2vw;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .soonPoster {
    height: 38vh;
    width: 55%;
    min-width: 100%;
    object-fit: contain;
    object-position: center;

    :hover {
      filter: inherit;
      -webkit-filter: grayscale(1000%);
    }
  }
  .soonPoster2 {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .soonData {
    text-align: center;
    padding: 0.1% 0% 2%;
  }

  @media (max-width: 1200px) {
    .soonPoster {
      height: 15rem;
      width: 85%;
    }

    .nameSoon {
      font-size: 1.8vw;
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
      font-size: 8vw;
      padding: 3%;
      margin-bottom: 10%;
    }
    .allMoviesDiv > div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }
    .soonPoster {
      height: 12rem;
      width: 55%;
      min-width: 100%;
      object-fit: contain;
      object-position: center;
    }
    .soon {
      font-size: 4vw;
    }
    .nameSoon {
      font-size: 4vw;
    }
  }
  @media (max-width: 400px) {
    h3 {
      font-size: 8vw;
      padding: 4%;
    }
  }
`;
