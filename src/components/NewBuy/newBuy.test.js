import React from 'react';
import { fireEvent, wait, cleanup, act } from '@testing-library/react';

import NewBuy from '.';
import { customProviderRender } from '../../setupTests';

afterEach(cleanup);

test('Component should mount', () => {
  const { getByLabelText, getByText } = customProviderRender(<NewBuy />);

  getByLabelText('Código');
  getByLabelText('Valor');
  getByLabelText('Data');
  getByText('Adicionar');
});

test('Component should validate code field', () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <NewBuy />
  );

  const codigo = getByLabelText('Código');

  act(() => {
    fireEvent.blur(codigo);
  });

  getByText('Informe o código');

  act(() => {
    fireEvent.blur(codigo, { target: { value: '1234' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should validate value field', () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <NewBuy />
  );

  const valor = getByLabelText('Valor');

  act(() => {
    fireEvent.blur(valor);
  });

  getByText('Informe o valor');

  act(() => {
    fireEvent.blur(valor, { target: { value: '123.2' } });
  });

  getByText('Valor inválido');

  act(() => {
    fireEvent.blur(valor, { target: { value: '12.345,6' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should validate date field', () => {
  const { getByLabelText, getByText, container } = customProviderRender(
    <NewBuy />
  );

  const data = getByLabelText('Data');

  act(() => {
    fireEvent.blur(data);
  });

  getByText('Informe a data');

  act(() => {
    fireEvent.blur(data, { target: { value: '12' } });
  });

  getByText('Data inválida');

  act(() => {
    fireEvent.blur(data, { target: { value: '27/04/20' } });
  });

  expect(container.querySelector('span')).not.toBeInTheDocument();
});

test('Component should turn button clickable', async () => {
  const toggle = jest.fn();

  const { getByLabelText, getByText } = customProviderRender(
    <NewBuy toggle={toggle} />
  );

  const codigo = getByLabelText('Código');
  const valor = getByLabelText('Valor');
  const data = getByLabelText('Data');

  await wait(() => {
    act(() => {
      fireEvent.change(codigo, { target: { value: '1234' } });
      fireEvent.blur(codigo, { target: { value: '1234' } });
      fireEvent.change(valor, { target: { value: '12.345,6' } });
      fireEvent.blur(valor, { target: { value: '12.345,6' } });
      fireEvent.change(data, { target: { value: '27/04/20' } });
      fireEvent.blur(data, { target: { value: '27/04/20' } });
    });
  });

  expect(getByText('Adicionar')).not.toHaveAttribute('disabled');

  await wait(() => {
    act(() => {
      fireEvent.click(getByText('Adicionar'));
    });
  });

  expect(toggle).toHaveBeenCalled();
});
