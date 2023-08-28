import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  toBeInTheDocument,
  toHaveLength,
  toHaveClass,
} from '@testing-library/jest-dom';
import UserForm from '..';
import store from './../../../store/redux/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('Deve renderizar um campo de input', () => {
  test('tipo input', () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>,
    );
    const campoTexto = screen.getByPlaceholderText('Título');
    expect(campoTexto).toHaveAttribute('type', 'text');
  });

  test('input nome', () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>,
    );
    const campoTexto = screen.getByPlaceholderText('Título');
    expect(campoTexto).toBeInTheDocument();
  });

  test('input nome', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>,
    );

    const campoTexto = screen.getByPlaceholderText('Título');
    userEvent.type(campoTexto, 'teste');

    await waitFor(() => {
      expect(campoTexto).toHaveValue('teste');
    });
    expect(campoTexto).toMatchSnapshot();
  });

  test('input detalhes', async () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>,
    );

    const campoTexto = screen.getByPlaceholderText('Detalhes');
    userEvent.type(campoTexto, 'DetalhesDetalhesDetalhes');

    await waitFor(() => {
      expect(campoTexto).toHaveValue('DetalhesDetalhesDetalhes');
    });
    expect(campoTexto).toMatchSnapshot();
  });
});
