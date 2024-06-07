import styled from 'styled-components';

export const NextReleases = styled.div`
  padding: 5% 0% 0%;
  width: 100%;
  background-color: var(--bg850);
  margin: auto;

  .allMoviesDiv {
    grid-gap: 20px;
    padding: 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
  }

  h4 {
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 2rem;
    color: var(--bg260);
    padding: 2%;
  }
  .soon {
    display: inline-block;
    font-size: 1.5vw;
    font-weight: 600;
    z-index: 99;

    a {
      text-decoration: none;
    }
  }

  .nameSoon {
    text-decoration: none;
    padding: 3% 0;
    overflow-y: hidden;
    height: 8vh;
    text-align: center;
    color: var(--bg260);
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }

  .soonPoster {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;

    :hover {
      filter: inherit;
      -webkit-filter: grayscale(1000%);
    }
  }

  .soonPoster2 {
    text-align: center;
    height: 45vh;
    width: 95%;
    position: relative;
  }

  .altText {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    background-color: var(--bg795);
    color: var(--bg260);
    padding: 5px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .soonData {
    text-align: center;
    color: var(--bg260);
    padding: 5% 0%;
  }

  @media (max-width: 900px) {
    padding: 10% 0%;

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
    padding: 15% 0% 0%;

    h3 {
      font-size: 4vw;
      padding: 3%;
    }
    .allMoviesDiv > div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }

    .soon {
      font-size: 2.6vw;
    }
  }
  @media (max-width: 550px) {
    h3 {
      font-size: 6vw;
      padding: 4%;
    }

    .soon {
      width: 50%;
      margin: 0 25%;
      font-size: 4.5vw;
    }
  }

  @media (max-width: 400px) {
    .soon {
      width: 80%;
      margin: 0 10%;
    }
  }
`;
