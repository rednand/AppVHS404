import React from "react";
import { Bottom, UnorderedList } from "./styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Bottom>
      <UnorderedList>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaFacebook />
        </li>
      </UnorderedList>
    </Bottom>
  );
};

export default Footer;
