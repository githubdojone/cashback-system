import React from 'react';

import Input from '../_shared/Input';
import Button from '../_shared/Button';
import { useForm } from '../../hooks/form';
import { FormWrapper } from './styles';
import { fields } from './validation';
import { setUser } from '../../services/api';
import { useAppContext, setUserInfo } from '../../contexts/AppContext';

const name = 'name',
  cpf = 'cpf',
  email = 'email',
  password = 'password';

export default function Signup() {
  const { dispatch } = useAppContext();

  const submitForm = async (inputs) => {
    try {
      const { data } = await setUser(inputs);
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

  const inputName = {
    id: name,
    label: 'Nome completo',
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[name] || '',
    error: errors[name],
  };

  const inputCpf = {
    id: cpf,
    label: 'CPF',
    mask: [
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ],
    guide: true,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[cpf] || '',
    error: errors[cpf],
  };

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
      inputs[name] &&
      inputs[cpf] &&
      inputs[email] &&
      inputs[password] &&
      !errors[name] &&
      !errors[cpf] &&
      !errors[email] &&
      !errors[password]
    );
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input {...inputName} />
      <Input {...inputCpf} />
      <Input {...inputEmail} />
      <Input {...inputPassword} />
      <Button type="submit" disabled={handleBtnDisabled()}>
        Cadastrar
      </Button>
    </FormWrapper>
  );
}
