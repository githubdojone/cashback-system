import React from 'react';

import { ButtonStyled } from './styles';

export default function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}
