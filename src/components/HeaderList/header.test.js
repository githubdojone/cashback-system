import React from 'react';
import { cleanup } from '@testing-library/react';

import HeaderList from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should render cashback message', () => {

  const { getByText } = customProviderRender(<HeaderList/>);

  getByText(/Cashback acumulado/);
  getByText(/R\$0.00/);
});

test('Component should render button', () => {

  const { getByText } = customProviderRender(<HeaderList/>);

  getByText(/Adicionar compra/);
});
