import { useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { ScrollLink } from './styles';
export default function ScrollPage() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <>
      {pageYPosition > 8 && (
        <ScrollLink href="#root">
          <FaAngleDoubleUp />
          <p> Voltar ao topo</p>
        </ScrollLink>
      )}
    </>
  );
}
