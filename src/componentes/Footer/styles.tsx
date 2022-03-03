import styled from "styled-components";

export const Bottom = styled.div`
  width: 100%;
  margin: 0;
  background: #8773ba;
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
