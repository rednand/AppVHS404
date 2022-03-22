import styled from "styled-components";

export const Bottom = styled.div`
  width: 100%;
  justify-content: space-around;
  display: inline-flex;
  margin: 0;
  background: #212223;
  height: 15rem;
  color: #c7c7c7;
`;
export const FooterCenter = styled.div`
  padding: 5%;
  font-size: 20px;
  font-weight: 900;
`;

export const FooterA = styled.a`
  text-decoration: none;
  color: var(--bg200);

  :active,
  :hover {
    color: var(--palletered4);
  }
`;

export const UnorderedList = styled(({ children, ...rest }) => (
  <ul {...rest}>{children}</ul>
))`
  padding: 5%;
  width: 50%;
  display: inline-flex;
  text-decoration: none;
  color: var(--bg200);
  li {
    margin-left: 3%;
    text-align: center;
    :active,
    :hover {
      color: var(--palletered4);
      cursor: pointer;
    }
  }
`;
