import React from 'react';
import { fireEvent, screen, wait } from '@testing-library/react';

import Button from '.';
import lightTheme from '../../../themes/light';
import { customProviderRender } from '../../../setupTests';

const text = 'Some Text';

test('Component should render with children', () => {
  customProviderRender(<Button>{text}</Button>);

  expect(screen.queryByText(text)).toBeInTheDocument();
});

test('Component should handle props', () => {
  customProviderRender(<Button disabled={true}>{text}</Button>);

  expect(screen.queryByText(text)).toHaveAttribute('disabled');
});

test('Component should have theme style', () => {
  customProviderRender(<Button>{text}</Button>);
  expect(screen.queryByText(text)).toHaveStyle(
    `background-color: ${lightTheme.colors.primary}`
  );
});

test('Component should handle click with passed function', async () => {
  const click = jest.fn();

  customProviderRender(<Button onClick={click}>{text}</Button>);

  await wait(() => {
    fireEvent.click(screen.queryByText(text));
  });

  expect(click).toHaveBeenCalled();
});
