import React from 'react';
import { cleanup, fireEvent, act } from '@testing-library/react';

import ModalNewBuy from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should render button', () => {
  const { getByText } = customProviderRender(<ModalNewBuy />);

  getByText(/Adicionar compra/);
});

test('Component should open modal with form', () => {
  const { getByText, getByLabelText } = customProviderRender(<ModalNewBuy />);

  act(() => {
    fireEvent.click(getByText(/Adicionar compra/));
  });

  getByLabelText('Código');
});
