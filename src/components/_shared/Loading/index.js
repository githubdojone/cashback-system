import React from 'react';

import loading from '../../../images/loading.svg';
import { LoadingWrapper } from './styles';

export default function Loading() {
  return (
    <LoadingWrapper>
      <img src={loading} alt="Loading icon" data-testid="loadingIcon" />
    </LoadingWrapper>
  );
}
