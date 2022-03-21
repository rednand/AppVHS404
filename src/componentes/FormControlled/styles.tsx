import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  margin: auto;
  padding: 5%;
  font-family: "Bebas Neue", cursive;

  .formInfo {
    color: var(--bg200);
    font-size: 2rem;
    letter-spacing: 0.2rem;
    margin: 5% auto;
  }
`;

export const ButtonForm = styled.button`
  margin: 5% 2%;
  box-shadow: var(--buttonForm, 0 0 0 transparent);
  border-radius: 0;
  border-color: var(--bg900);
  color: var(--bg200);
  font-size: 2rem;
  background-color: var(--palletered5);
  letter-spacing: 1rem;
  max-width: 100%;
  min-width: 100%;

  :hover,
  :active,
  :visited {
    background-color: var(--bg900);
    border-color: var(--bg200);
  }
`;
