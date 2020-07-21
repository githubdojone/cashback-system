import React from 'react';
import { cleanup } from '@testing-library/react';

import BuyItem from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should mount and configure props', () => {
  const itemProps = {
    code: 1234,
    value: 155.6,
    date: '10/04/20',
    percentCashback: 5,
    status: 0,
  };

  const { getByText } = customProviderRender(
    <BuyItem {...itemProps} />
  );

  getByText('1234');
  getByText('R$155.60');
  getByText('10/04/20');
  getByText(/5% - R\$7.78/);
  getByText('Em análise');

});

test('Component should handle status "reprovado"', () => {
  const itemProps = {
    code: 1234,
    value: 155.6,
    date: '10/04/20',
    percentCashback: 5,
    status: -1,
  };

  const { getByText } = customProviderRender(<BuyItem {...itemProps} />);

  getByText('Reprovado');
});

test('Component should handle status "aprovado"', () => {
  const itemProps = {
    code: 1234,
    value: 155.6,
    date: '10/04/20',
    percentCashback: 5,
    status: 1,
  };

  const { getByText } = customProviderRender(<BuyItem {...itemProps} />);

  getByText('Aprovado');
});
