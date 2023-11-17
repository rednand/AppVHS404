import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';
import { MemoryRouter } from 'react-router-dom';
import {
  toBeInTheDocument,
  toHaveLength,
  toHaveClass,
} from '@testing-library/jest-dom';

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

test('Não deve renderizar o link para Reviews', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const linkReview = screen.queryByText('Reviews');
  expect(linkReview).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a classe link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).not.toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
