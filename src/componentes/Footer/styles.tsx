import styled from 'styled-components';

export const Bottom = styled.div`
  width: 100%;
  justify-content: space-around;
  display: inline-flex;
  background: var(--bg780);
  height: 15rem;
  color: var(--bg250);

  @media (max-width: 600px) {
    display: block;
    padding: 6%;
  }
`;
export const FooterCenter = styled.div`
  padding: 5%;
  font-size: 20px;
  font-weight: 900;

  @media (max-width: 600px) {
    font-size: 15px;
    width: 60%;
    padding-left: 6%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
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
