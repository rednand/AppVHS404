import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#ffffff",
  primaryLight: "#d44d24",
};

export const Navigation = styled.nav`
  margin: auto 36%;
  width: ${(props) => (props ? "40%" : "0")};
  opacity: ${(props) => (props ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
`;

export const ItemLink = styled(NavLink)`
  background-color: var(--bg800);
  margin: 0;
  height: 3rem;
  float: left;
  border-color: var(--bg900);
  font-size: 1.2rem;
  font-weight: 900;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 0.6rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--bg200) 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: var(--bg900);
    background-color: ${COLORS.primaryDark};
    border-color: var(--bg100);
    transform: translateY(.5rem);
  }
`;
