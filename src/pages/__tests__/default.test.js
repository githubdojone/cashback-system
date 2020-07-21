import React from 'react';
import { wait, act } from '@testing-library/react';

import { customProviderRender } from '../../setupTests';
import Default from '../Default';

test('Component should render switch component', async () => {
  const { getByText } = customProviderRender(<Default />);

  await wait(() => {
    act(() => {});
  }, 500); //handle requests on component mound

  getByText(/Já possui uma conta?/);
  getByText(/Ainda não possui uma conta?/);
  getByText(/Entrar agora/);
  getByText(/Criar agora/);
});
