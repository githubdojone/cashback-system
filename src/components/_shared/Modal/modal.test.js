import React from 'react';
import { fireEvent, screen, wait, act } from '@testing-library/react';

import Modal from '.';
import { customProviderRender } from '../../../setupTests';

const text = 'Modal content';

test('Component should not render modal content', () => {
  customProviderRender(<Modal isOpen={false}>{text}</Modal>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test('Component should render children based on isOpen flag', () => {
  customProviderRender(<Modal isOpen={true}>{text}</Modal>);

  expect(screen.queryByText(text)).toBeInTheDocument();
});

test('Component should render title', () => {
  customProviderRender(
    <Modal isOpen={true} title="Teste de titulo">
      {text}
    </Modal>
  );

  expect(screen.queryByText('Teste de titulo')).toBeInTheDocument();
});

test('Component should execute props functions', async () => {
  const toggle = jest.fn();

  const { getByTestId } = customProviderRender(
    <Modal isOpen={true} toggle={toggle}>
      {text}
    </Modal>
  );

  act(() => {
    fireEvent.click(getByTestId('backdrop'));
  });

  await wait(() => {
    expect(toggle).toHaveBeenCalled();
  });
});
