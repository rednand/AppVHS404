import styled from "styled-components";

export const SingleInput = styled.input`
  box-shadow: var(--shd, 0 0 0 transparent);
  border-radius: 0;
  padding: 3px 10px 3px 40px;
  padding-top: 0.8em;
  max-width: 100%;
  min-width: 100%;
  margin: 2%;
  border-color: var(--bg900);
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: var(--bg100);
  font-weight: 900;
  letter-spacing: 0.6rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;
