import styled from 'styled-components';

export const Form = styled.form`
  width: 70%;
  margin: 8% auto;
  box-shadow: inset 0px 0px 0px 10px var(--palletered5);
  background-color: var(--bg200);
  padding: 5% 15%;
  font-family: 'Barlow Condensed', sans-serif;

  .form-group {
    margin-bottom: 5%;
  }

  .formInfo {
    color: var(--bg900);
    font-size: 2rem;
    font-weight: 800;
    margin: 5% auto;

    @media (max-width: 700px) {
      font-size: 2rem;
      margin: 20% auto 15%;
    }
  }

  @media (max-width: 900px) {
    margin: 15% auto;
  }

  @media (max-width: 700px) {
    width: 90%;
    margin: 18% auto;
    padding: 2% 15%;
  }

  @media (max-width: 300px) {
    width: 95%;
    margin: 25% auto;
  }
`;

export const ButtonForm = styled.button`
  margin: 5% 2%;
  box-shadow: var(--buttonForm, 0 0 0 transparent);
  border-radius: 0;
  border-color: var(--bg900);
  color: var(--bg200);
  font-family: 'Bebas Neue', cursive;

  background-color: var(--palletered5);
  max-width: 100%;
  min-width: 100%;

  :hover,
  :active,
  :visited {
    background-color: var(--bg900);
    border-color: var(--bg900);
  }

  @media (max-width: 700px) {
    margin: 15% 2%;
  }
`;
