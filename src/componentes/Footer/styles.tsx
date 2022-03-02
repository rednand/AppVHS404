import styled from "styled-components";

export const Bottom = styled.div`
  width: 80%;
  margin: 0 10%;
  background: #8773ba;
  grid-area: footer;
  height: 10rem;
  float: right;
  color: white;
`;

export const UnorderedList = styled(({ children, ...rest }) => (
  <ul {...rest}>{children}</ul>
))`
  display: inline-flex;
  float: right;
  margin-right: 10.25%;
  li {
    text-align: right;
    margin-left: 1rem;
  }
`;
