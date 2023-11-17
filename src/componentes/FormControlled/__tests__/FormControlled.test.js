import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  test('Deve chamar um evento de onSubmit ao clicar em Cadastrar novo filme', async () => {
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

    const campoTitulo = screen.getByPlaceholderText('Título');
    userEvent.type(campoTitulo, 'teste');

    await waitFor(() => {
      expect(campoTitulo).toHaveValue('teste');
    });
    const campoData = screen.getByPlaceholderText('release_date');
    userEvent.type(campoData, '2023-05-10');

    await waitFor(() => {
      expect(campoData).toHaveValue('2023-05-10');
    });

    const campoFonte = screen.getByPlaceholderText('Fonte');
    userEvent.type(campoFonte, 'FonteFonte');

    await waitFor(() => {
      expect(campoFonte).toHaveValue('FonteFonte');
    });

    const botao = screen.getByText('Cadastrar');
    userEvent.click(botao);
    // expect(botao).toHaveBeenCalledTimes(1);
  });
});
