import React, { useState } from "react";
import { Navigation, List, ItemLink } from "./styles";

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
          <ItemLink onClick={handleClick} to="/about">
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
    </Navigation>
  );
};

export default Navbar;
