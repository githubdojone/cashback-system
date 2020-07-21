import React from 'react';
import { cleanup } from '@testing-library/react';

import BuyList from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should iterate list', () => {
  const list = [
    {
      code: 1,
      value: 100,
      date: '10/04/20',
      percentCashback: 5,
      status: -1,
    },
    {
      code: 2,
      value: 200,
      date: '20/04/20',
      percentCashback: 15,
      status: 0,
    },
    {
      code: 3,
      value: 300,
      date: '30/04/20',
      percentCashback: 25,
      status: 1,
    },
  ];

  const { getByText } = customProviderRender(<BuyList list={list} />);

  getByText('Reprovado');
  getByText('Aprovado');
  getByText('Em análise');
});

test('Component should show message when list is empty', () => {
  const list = [];

  const { getByText } = customProviderRender(<BuyList list={list} />);

  getByText('Não há compras');
});
