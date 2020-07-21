import React, { useState } from 'react';

import Login from '../Login';
import Signup from '../Signup';
import Button from '../_shared/Button';

import { SwitchWrapper, Box, Slider, ActionWrapper } from './styles';

export default function SwitchStart() {
  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    setActive(id);
  };

  const msgLogin = {
    id: 0,
    msg: 'Já possui uma conta?',
    btnMsg: 'Entrar agora',
    handleClick,
  };

  const msgSignup = {
    id: 1,
    msg: 'Ainda não possui uma conta?',
    btnMsg: 'Criar agora',
    handleClick,
  };

  return (
    <SwitchWrapper>
      <Box>
        <Slider active={active}>{!active ? <Login /> : <Signup />}</Slider>
        <MsgButton {...msgLogin} />
        <MsgButton {...msgSignup} />
      </Box>
    </SwitchWrapper>
  );
}

function MsgButton({ id, msg, btnMsg, handleClick }) {
  return (
    <ActionWrapper id={id}>
      <p>{msg}</p>
      <Button onClick={() => handleClick(id)}>{btnMsg}</Button>
    </ActionWrapper>
  );
}
