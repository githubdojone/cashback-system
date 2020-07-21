import React from 'react';

import Loading from '.';
import { customProviderRender } from '../../../setupTests';

test('Component should not render modal content', () => {
  const { getByTestId } = customProviderRender(<Loading />);

  expect(getByTestId('loadingIcon')).toBeInTheDocument();
});
