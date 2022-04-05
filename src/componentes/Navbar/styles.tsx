import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "var(--bg200)",
  primaryLight: "#d44d24",
};

export const Navigation = styled.nav`
  opacity: ${(props) => (props ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  display: inline-flex;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const ItemLink = styled(NavLink)`
  background-color: var(--bg900);
  height: 3rem;
  float: left;
  border-color: var(--bg900);
  font-size: 1.5vw;
  font-weight: 900;
  text-decoration: none;
  color: ${COLORS.primaryDark};
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
    color: ${COLORS.primaryLight};
    background-color: ${COLORS.primaryDark};
    border-color: var(--bg100);
    transform: translateY(0.5rem);
  }
`;

export const NavbarDropdown = styled.div`
  font-size: 4vw;
  font-weight: 900;
  background-color: var(--bg900);
  text-align:center ;
  font-size: 2rem;
  width: 100px;
  color: #ffffff;
  margin-left: 0;
  background-color: var(--bg900);
  height: 3rem;
  display: none;
  position: relative;
  &:hover {
    display: block;
    > div {
      display: block;
    }
  }

  @media (max-width: 400px) {
    display: block;
  }
`;

export const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background: linear-gradient(5rad, var(--bg900), #d41d24, var(--bg900));
  min-width: 180%;
  padding: 12px 16px;
  z-index: 1;
`;

export const ListDrop = styled.ul`
  list-style: none;
  text-align: center;
  display: inline-block;
  width: 100%;
`;

export const ItemLinkDrop = styled(NavLink)`
  background-color: var(--bg900);
  margin: 2%;
  height: auto;
  width: 100%;
  float: left;
  font-size: 5vw;
  font-weight: 900;
  text-decoration: none;
  color: ${COLORS.primaryDark};
  padding: .6rem 2rem;
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
    color: ${COLORS.primaryLight};
    background-color: ${COLORS.primaryDark};
    border-color: var(--bg100);
    transform: translateY(0.5rem);
  }
`;
