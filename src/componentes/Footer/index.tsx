import React from 'react';
import { Bottom, FooterCenter, FooterA, UnorderedList } from './styles';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Bottom>
      <UnorderedList>
        <li>
          <FaInstagram size={30}>
            <a href="www.facebook.com" />
          </FaInstagram>
        </li>
        <li>
          <FaLinkedin size={30}>
            <a href="www.linkedin.com"></a>
          </FaLinkedin>
        </li>
        <li>
          <FaFacebook size={30}>
            <a href="www.instagram.com"></a>
          </FaFacebook>
        </li>
      </UnorderedList>
      <FooterCenter>
        &copy; {new Date().getFullYear()} Copyright:
        <FooterA href="/"> VHS 404 </FooterA>
      </FooterCenter>
    </Bottom>
  );
};

export default Footer;
