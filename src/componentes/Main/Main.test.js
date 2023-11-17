import { render, screen } from '@testing-library/react';
import Main from '.';
import React from 'react';
import store from './../../store/redux/store';
import { Provider } from 'react-redux';
import {
  toBeInTheDocument,
  toHaveLength,
  toHaveClass,
} from '@testing-library/jest-dom';

test('Deve apresentar o mês atual', () => {
  const teste = [
    {
      data: '10/10/2020',
    },
  ];
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
  );
  const data = screen.getByRole('month');
  expect(data).toBeInTheDocument();
});

test('Deve apresentar o nome do filme', () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
  );

//   const data = screen.getByTestId('nomeFilme');
//   expect(data).toHaveTextContent('A Última Viagem de Demeter');
});
