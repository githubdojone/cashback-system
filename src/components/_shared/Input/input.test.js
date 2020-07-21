import React from 'react';
import { fireEvent, screen, wait, cleanup, act } from '@testing-library/react';

import Input from '.';
import { customProviderRender } from '../../../setupTests';
import lightTheme from '../../../themes/light';

const value = 'value';
const name = 'name';
const blur = jest.fn();
const focus = jest.fn();
const change = jest.fn();
const error = 'error';
const label = 'Nome';

afterEach(cleanup);

test('Component should mount', () => {
  customProviderRender(<Input id={name} label={label} />);

  expect(screen.queryByLabelText(label)).toBeInTheDocument();
});

test('Component should render props', () => {
  customProviderRender(
    <Input
      id={name}
      name={name}
      label={label}
      defaultValue={value}
      error={error}
    />
  );

  const elmt = screen.queryByLabelText(label);

  expect(elmt).toBeInTheDocument();

  expect(elmt.value).toBe(value);

  screen.getByText(error);

  expect(elmt).toHaveAttribute('name', name);
});

test('Component should execute props functions', async () => {
  customProviderRender(
    <Input
      id={name}
      label={label}
      value={value || ''}
      onChange={change}
      onBlur={blur}
      onFocus={focus}
    />
  );

  const elmt = screen.queryByLabelText(label);

  await wait(() => {
    fireEvent.change(elmt, { target: { value: 'a' } });
  });

  expect(change).toHaveBeenCalled();

  await wait(() => {
    fireEvent.blur(elmt, { target: { value: 'a' } });
  });

  expect(blur).toHaveBeenCalled();

  await wait(() => {
    fireEvent.focus(elmt, { target: { value: 'a' } });
  });

  expect(focus).toHaveBeenCalled();
});

test('Component should change color when focused', async () => {
  customProviderRender(<Input id={name} label={label} />);

  const elmt = screen.queryByLabelText(label);

  expect(elmt).toHaveStyle(`border-color: ${lightTheme.colors.inputColor}`);

  act(() => elmt.focus());
  expect(elmt).toHaveFocus();

  await wait(() => {
    expect(elmt).toHaveStyle(`border-color: ${lightTheme.colors.primary}`);
  })
});

test('Component should not have click when is disabled', async () => {
  customProviderRender(<Input id={name} label={label} disabled />);

  const elmt = screen.queryByLabelText(label);

  act(() => elmt.focus());
  expect(elmt).not.toHaveFocus();

  expect(elmt).toHaveAttribute('disabled');

});

test('Component should handle mask prop', async () => {
  customProviderRender(
    <Input id={name} label={label} mask={[/\d/, /\d/, '/' ,/\d/, /\d/]} />
  );

  const elmt = screen.queryByLabelText(label);

  act(() => {
    fireEvent.change(elmt, { target: { value: '1' } });
  })

  expect(elmt.value).toEqual('1_/__');

});
