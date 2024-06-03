import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
  margin: auto;
  padding: 5%;
  font-family: 'Barlow Condensed', sans-serif;
  .formInfo {
    color: var(--bg200);
    font-size: 2rem;
    margin: 5% auto;
   
    
  @media (max-width: 700px) {
    font-size: 2rem;
    margin: 20% auto 15%;
    }
  }

  @media (max-width: 900px) {
    padding: 5% 0;
      width: 80%;
    }

  @media (max-width: 700px) {
      padding: 10% 0;
      width: 80%;
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
    border-color: var(--bg200);
  }

  @media (max-width: 700px) {
    margin: 15% 2%;
    }
`;
