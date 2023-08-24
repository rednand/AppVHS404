import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';
import { MemoryRouter } from 'react-router-dom';
import { toBeInTheDocument, toHaveLength } from '@testing-library/jest-dom';

test('Deve renderizar um link para a página inicial', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  const linksPaginaInicial = screen.queryAllByText('Home');

  const linkPaginaInicial = linksPaginaInicial.find(
    (link) => link.getAttribute('href') === '/',
  );

  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const listaLinks = screen.getAllByRole('link');
  expect(listaLinks).toHaveLength(3);
});
