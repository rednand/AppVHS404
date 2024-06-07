import styled from 'styled-components';

export const SingleInput = styled.input`
  box-shadow: var(--shd, 0 0 0 transparent);
  border-radius: 0;
  padding: 3px 10px 3px 10px;
  padding-top: 0.8em;
  max-width: 100%;
  min-width: 100%;
  margin: 2%;
  border-color: var(--bg900);
  font-size: 2%.5;
  letter-spacing: 0.1ch;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: var(--bg900);
  font-weight: 800;
  letter-spacing: 0.1ch;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;
