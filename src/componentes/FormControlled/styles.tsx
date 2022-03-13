import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  margin: auto;
  padding: 5%;
  font-family: "Bebas Neue", cursive;

`;

export const ButtonForm = styled.button`
  margin: 5% 2%;
  box-shadow: var(--buttonForm, 0 0 0 transparent);
  border-radius: 0;
  border-color: var(--bg200);
  color: var(--bg900);
  font-size: 2rem;
  background-color: rgb(247, 93, 93);
  letter-spacing: 1rem;
  max-width: 100%;
  min-width: 100%;

  :hover {
    background-color: var(--bg900);
    border-color: var(--bg200);
  }
`;
