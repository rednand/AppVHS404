import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MainLeft = styled.div`
  position: relative;
  width: 50%;
  display: inline-flex;

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 65%;
  }
`;

export const TimeLine = styled.div`
  width: 3%;
  margin: 0;
  background-color: #d41d24;
`;

export const Container = styled.div`
  font-family: 'Bebas Neue', cursive;

  font-weight: 100;
  width: 97%;
  /* display: flex; */
  flex-direction: column;

  .h2Class {
    color: var(--bg900);
    letter-spacing: 0.2ch;
    font-size: 3vw;
    text-align: center;
    background: var(--bg200);
    margin: 0 0 1rem 0;

    
    @media (max-width: 900px) {
      font-size: 6vw;
      padding: 5% 0;
    }
  }
  .itemMes {
    color: var(--palletered4);
  }

  .noMovies {
    background-color: var(--bg200);
  }
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  margin: 8% 0;
  word-spacing: 5px;
  color: var(--bg900);
  outline: none;
  background-color: var(--bg200);

  @media (max-width: 600px) {
    margin: 8% 0 15%;
  }

  .card {
    border: none;
    background: var(--bg200);
  }
  .titleItem {
    font-size: 2vw;
    margin: 7% 0 0 4%;
    width: 50%;

    a {
      text-decoration: none;
      color: inherit;
    }

    @media (max-width: 900px) {
      font-size: 3vw;
      width: 100%;
    }

    @media (max-width: 600px) {
      font-size: 4vw;
    }
  }
  .releaseItem {
    position: absolute;
    top: -10%;
    left: -2%;
    width: 50%;
    text-align: center;
    background: #d41d24;
    color: var(--bg200);
    letter-spacing: 0.2ch;
    font-size: 2vw;

    @media (max-width: 900px) {
      font-size: 2.5vw;
    }

    @media (max-width: 600px) {
      font-size: 4vw;
      top: -8%;
      left: -1%;
      width: 60%;
    }
  }

  .overviewItem {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.3vw;
    margin: 2% 4% 2% 4%;
    font-weight: 700;

    @media (max-width: 900px) {
      font-size: 1.8vw;
    }

    @media (max-width: 600px) {
      font-size: 2.2vw;
    }

    @media (max-width: 400px) {
      font-size: 3vw;
    }
  }
  .cardMedia {
    margin: 2% 4%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  .posterItem {
    width: 35%;
    img {
      width: 90%;
      height: 40vh;
      :hover {
        filter: inherit;
        -webkit-filter: contrast(150%);
      }
      @media (max-width: 900px) {
        height: 35vh;
      }

      @media (max-width: 600px) {
        height: 30vh;
        width: 70%;
      }

      @media (max-width: 400px) {
        width: 60%;
      }
    }

    @media (max-width: 600px) {
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
    }
  }
  .videoItem {
    width: 65%;
    iframe {
      width: 100%;
      height: 40vh;
      :hover {
        filter: inherit;
        -webkit-filter: contrast(150%);
      }
      @media (max-width: 900px) {
        height: 35vh;
      }

      @media (max-width: 600px) {
        width: 100%;
        height: 20vh;
      }
    }

    @media (max-width: 600px) {
      margin-top: 5%;
      width: 100%;
    }
  }
  .buttonGenre {
    display: inline-flex;
    margin: 2% 0 4% 4%;
    .pbuttonGenre {
      margin-right: 2rem;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 1.3vw;
      padding: 0.6rem 1.2rem;
      border: 1px solid #212121;
      border-radius: 5px;

      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
  }
`;
