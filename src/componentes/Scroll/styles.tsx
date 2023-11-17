import styled from 'styled-components';

export const ScrollLink = styled.a`
  text-align: center;
  display: inline-block;
  position: fixed;
  color: var(--bg100);
  font-weight: 900;
  right: 1%;
  text-decoration: none;
  background-color: var(--bg800);
  padding: 0.3%;
  border: 2px solid var(--bg900);
  bottom: 20px;

  :active {
    color: var(--bg900);
  }
  :hover {
    color: var(--bg800);
    background-color: var(--bg200);
  }
`;
