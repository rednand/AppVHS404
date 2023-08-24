import styled from 'styled-components';

export const Back = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
`;

export const MainReview = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  color: #000000;
  padding: 5% 0;
  display: flex;
  flex-direction: row;
`;

export const InputButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  input {
    width: 50%;
    height: 2rem;
  }
  button {
    width: 50%;
    height: 2rem;
    background-color: #000000;
  }
`;

export const CardReview = styled.div`
  width: 60%;

  .card {
    display: flex;
    flex-direction: column;
    background-color: #000000;
    height: 2rem;
    margin: 5%;
  }
`;
