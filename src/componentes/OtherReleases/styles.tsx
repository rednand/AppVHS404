import styled from "styled-components";

export const NextReleases = styled.div`
  margin: 5% 2% 1%;
  height: max-content;
  background-color: #ffffff;

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
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
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
`;
