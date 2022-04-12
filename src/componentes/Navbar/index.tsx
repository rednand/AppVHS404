import React, { useState } from "react";
import {
  Navigation,
  List,
  ItemLink,
  NavbarDropdown,
  NavbarDropdownContent,
  ListDrop,
  ItemLinkDrop
} from "./styles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Navigation>
      <List>
        <li>
          <ItemLink onClick={handleClick} to="/">
            Home
          </ItemLink>
        </li>
        <li>
          <ItemLink onClick={handleClick} to="/reviews">
            Reviews
          </ItemLink>
        </li>
        <li>
          <ItemLink onClick={handleClick} to="/cadastro">
            Informe um filme
          </ItemLink>
        </li>
        <li>
          <ItemLink onClick={handleClick} to="/blog">
            Contato
          </ItemLink>
        </li>
      </List>
      <NavbarDropdown>
        <span>Menu</span>
        <NavbarDropdownContent>
          <ListDrop>
            <li>
              <ItemLinkDrop onClick={handleClick} to="/">
                Home
              </ItemLinkDrop>
            </li>
            <li>
              <ItemLinkDrop onClick={handleClick} to="/reviews">
                Reviews
              </ItemLinkDrop>
            </li>
            <li>
              <ItemLinkDrop onClick={handleClick} to="/cadastro">
                Informe um filme
              </ItemLinkDrop>
            </li>
            <li>
              <ItemLinkDrop onClick={handleClick} to="/blog">
                Contato
              </ItemLinkDrop>
            </li>
          </ListDrop>
        </NavbarDropdownContent>
      </NavbarDropdown>
    </Navigation>
  );
};

export default Navbar;
