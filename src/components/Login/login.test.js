import React from 'react';
import { fireEvent, wait, cleanup, act } from '@testing-library/react';

import Login from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should mount', () => {
  const { getByLabelText, getByText } = customProviderRender(<Login />);

  getByLabelText('E-mail');
  getByLabelText('Senha');
  getByText('Entrar');
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

  const email = getByLabelText('E-mail');
  const password = getByLabelText('Senha');

  act(() => {
    fireEvent.change(email, { target: { value: 'oi@oi.com' } });
    fireEvent.blur(email, { target: { value: 'oi@oi.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.blur(password, { target: { value: '123456' } });
  });

  expect(getByText('Entrar')).not.toHaveAttribute('disabled');

  await wait(() => {
    act(() => {
      fireEvent.click(getByText('Entrar'));
    });
  });
});
