import React from 'react';
import { cleanup, fireEvent, act } from '@testing-library/react';

import SwitchStart from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should render texts', () => {
  const { getByText } = customProviderRender(<SwitchStart />);

  getByText(/Já possui uma conta?/);
  getByText(/Ainda não possui uma conta?/);
  getByText(/Entrar agora/);
  getByText(/Criar agora/);
});

test('Component should render login component', () => {
  const { getByLabelText, getByText } = customProviderRender(<SwitchStart />);

  getByLabelText('E-mail');
  getByLabelText('Senha');
  getByText('Entrar');
});

test('Component should render signup when click btn criar agora', () => {
  const { getByLabelText, getByText } = customProviderRender(<SwitchStart />);

  act(() => {
    fireEvent.click(getByText(/Criar agora/));
  });

  getByLabelText('Nome completo');
  getByLabelText('CPF');
  getByLabelText('E-mail');
  getByLabelText('Senha');
  getByText(/Cadastrar/);
});

test('Component should toggle between login and signup ', () => {
  const { getByText } = customProviderRender(<SwitchStart />);

  getByText('Entrar');

  act(() => {
    fireEvent.click(getByText(/Criar agora/));
  });

  getByText(/Cadastrar/);

  act(() => {
    fireEvent.click(getByText(/Entrar agora/));
  });

  getByText('Entrar');
});
