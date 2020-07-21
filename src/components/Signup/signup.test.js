import React from 'react';
import { fireEvent, cleanup, wait, act } from '@testing-library/react';

import Login from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should mount', () => {
  const { getByLabelText, getByText } = customProviderRender(<Login />);

  getByLabelText('Nome completo');
  getByLabelText('CPF');
  getByLabelText('E-mail');
  getByLabelText('Senha');
  getByText('Cadastrar');
});

test('Component should validate name field', async () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <Login />
  );

  const name = getByLabelText('Nome completo');

  act(() => {
    fireEvent.blur(name);
  });

  getByText('Informe o nome completo');

  act(() => {
    fireEvent.change(name, { target: { value: '123' } });
    fireEvent.blur(name, { target: { value: '123' } });
  });

  getByText('Nome inválido');

  act(() => {
    fireEvent.change(name, { target: { value: 'João das Couves' } });
    fireEvent.blur(name, { target: { value: 'João das Couves' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should validate CPF field', async () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <Login />
  );

  const cpf = getByLabelText('CPF');

  act(() => {
    fireEvent.blur(cpf);
  });

  getByText('Informe o CPF');

  act(() => {
    fireEvent.change(cpf, { target: { value: '111.111.111-11' } });
    fireEvent.blur(cpf, { target: { value: '111.111.111-11' } });
  });

  getByText('CPF inválido');

  act(() => {
    fireEvent.change(cpf, { target: { value: '722.754.420-65' } });
    fireEvent.blur(cpf, { target: { value: '722.754.420-65' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should validate e-mail field', () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <Login />
  );

  const email = getByLabelText('E-mail');

  act(() => {
    fireEvent.blur(email);
  });

  getByText('Informe o e-mail');

  act(() => {
    fireEvent.blur(email, { target: { value: '123' } });
  });

  getByText('E-mail inválido');

  act(() => {
    fireEvent.blur(email, { target: { value: 'oi@oi.com' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should validate password field', () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <Login />
  );

  const password = getByLabelText('Senha');

  act(() => {
    fireEvent.blur(password);
  });

  getByText('Informe a senha');

  act(() => {
    fireEvent.blur(password, { target: { value: '123' } });
  });

  getByText('Senha deve conter 6 ou mais dígitos');

  act(() => {
    fireEvent.blur(password, { target: { value: '123456' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should turn button clickable', async () => {
  const { getByLabelText, getByText } = customProviderRender(<Login />);

  const name = getByLabelText('Nome completo'),
    cpf = getByLabelText('CPF'),
    email = getByLabelText('E-mail'),
    password = getByLabelText('Senha');

  act(() => {
    fireEvent.change(name, { target: { value: 'João das Couves' } });
    fireEvent.blur(name, { target: { value: 'João das Couves' } });
    fireEvent.change(cpf, { target: { value: '722.754.420-65' } });
    fireEvent.blur(cpf, { target: { value: '722.754.420-65' } });
    fireEvent.change(email, { target: { value: 'oi@oi.com' } });
    fireEvent.blur(email, { target: { value: 'oi@oi.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.blur(password, { target: { value: '123456' } });
  });

  expect(getByText('Cadastrar')).not.toHaveAttribute('disabled');

  await wait(() => {
    act(() => {
      fireEvent.click(getByText('Cadastrar'));
    });
  })
});
