import React from 'react';

import Input from '../_shared/Input';
import Button from '../_shared/Button';
import { useForm } from '../../hooks/form';
import { FormWrapper } from './styles';
import { fields } from './validation';
import { login } from '../../services/api';
import { useAppContext, setUserInfo } from '../../contexts/AppContext';

const email = 'email',
  password = 'password';

export default function Login() {
  const { dispatch } = useAppContext();

  const submitForm = async (inputs) => {
    try {
      const { data } = await login(inputs);
      dispatch(setUserInfo(data));
    } catch (err) {
      console.log(err);
    }
  };

  const {
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    errors,
    inputs,
  } = useForm(submitForm, fields);

  const inputEmail = {
    id: email,
    label: 'E-mail',
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[email] || '',
    error: errors[email],
  };

  const inputPassword = {
    id: password,
    type: 'password',
    label: 'Senha',
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[password] || '',
    error: errors[password],
  };

  const handleBtnDisabled = () => {
    return !(
      inputs[email] &&
      inputs[password] &&
      !errors[email] &&
      !errors[password]
    );
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <Input {...inputEmail} />
      <Input {...inputPassword} />
      <Button type="submit" disabled={handleBtnDisabled()}>
        Entrar
      </Button>
    </FormWrapper>
  );
}
