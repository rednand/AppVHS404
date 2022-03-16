import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#ffffff",
  primaryLight: "#d44d24",
};

export const Navigation = styled.nav`
  width: auto;
  float: right;
  margin-top: .8%;
  margin-right:28%;
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
  width: 40%;
  margin: .1%;
  box-shadow: var(--navbarBord, 0 0 0 transparent);
  border-color: var(--bg900);
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 900;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 0.5rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--bg700) 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    background-color: var(--bg700);
    width: 40%;
    box-shadow: var(--navbarBordHover, 0 0 0 0);
    border-color: var(--bg100);
    transform: translateX(-1rem);
  }
`;
